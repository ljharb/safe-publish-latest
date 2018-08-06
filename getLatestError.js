'use strict';

var exec = require('child_process').exec;
var semver = require('semver');
var format = require('util').format;
var getTag = require('./getTag');

var isPrerelease = function (v) {
	return semver.prerelease(v) !== null;
};
var isNotPrerelease = function (v) {
	return !isPrerelease(v);
};

module.exports = function getLatestError(name, version, options, callback) {
	if (process.env.PUBLISH_LATEST_DANGEROUSLY === 'true') {
		return callback(null, '$PUBLISH_LATEST_DANGEROUSLY override enabled.');
	}
	if (getTag() !== 'latest') {
		return callback(null, 'Non-latest dist-tag detected.');
	}

	return exec('npm info ' + name + ' versions --json --loglevel=info', function (err, json) {
		if (err) {
			if ((/^npm ERR! code E404$/m).test(err)) {
				return callback(null, 'v' + version + ' is the first version published.');
			}
			return callback([
				'Error fetching package versions:',
				err
			]);
		}
		var allVersions;
		try {
			allVersions = [].concat(JSON.parse(json));
		} catch (e) {
			return callback([
				'Error parsing JSON from npm',
				e
			]);
		}

		var versions = allVersions.filter(isNotPrerelease);
		if (versions.length === 0) {
			return callback(null, 'No non-prerelease versions detected.');
		}

		var max = semver.maxSatisfying(versions, '*');
		if (semver.eq(version, max)) {
			return callback([
				'Attempting to publish already-published version v' + version + '.'
			]);
		}

		var greater = semver.gtr(version, versions.join('||'));
		var prerelease = isPrerelease(version);
		if (!greater || prerelease) {
			var msg = prerelease
				? format('Attempting to publish v%s as "latest", but it is a prerelease version.', version)
				: format('Attempting to publish v%s as "latest", but it is not later than v%s.', version, max);
			return callback([
				msg,
				'\nPossible Solutions:',
				'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
				'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`'
			]);
		}

		return callback(null, format('v%s is later than v%s.', version, max));
	});
};
