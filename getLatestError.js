'use strict';

const { exec } = require('child_process');
const {
	eq,
	gtr,
	maxSatisfying,
	prerelease,
} = require('semver');
const { format } = require('util');
const getTag = require('./getTag');

function isPrerelease(v) {
	return prerelease(v) !== null;
}
function isNotPrerelease(v) {
	return !isPrerelease(v);
}

module.exports = function getLatestError(name, version, callback) {
	if (process.env.PUBLISH_LATEST_DANGEROUSLY === 'true') {
		return callback(null, '$PUBLISH_LATEST_DANGEROUSLY override enabled.');
	}
	if (getTag() !== 'latest') {
		return callback(null, 'Non-latest dist-tag detected.');
	}

	return exec(`npm info ${name} versions --json --loglevel=info`, (err, json) => {
		if (err) {
			if ((/^npm ERR! code E404$/m).test(err)) {
				return callback(null, `v${version} is the first version published.`);
			}
			return callback([
				'Error fetching package versions:',
				err,
			]);
		}
		let allVersions;
		try {
			allVersions = [].concat(JSON.parse(json));
		} catch (e) {
			return callback([
				'Error parsing JSON from npm',
				e,
			]);
		}

		const versions = allVersions.filter(isNotPrerelease);
		if (versions.length === 0) {
			return callback(null, 'No non-prerelease versions detected.');
		}

		const max = maxSatisfying(versions, '*');
		if (eq(version, max)) {
			return callback([
				`Attempting to publish already-published version v${version}.`,
			]);
		}

		const greater = gtr(version, versions.join('||'));
		const isPre = isPrerelease(version);
		if (!greater || isPre) {
			const msg = isPre
				? format('Attempting to publish v%s as "latest", but it is a prerelease version.', version)
				: format('Attempting to publish v%s as "latest", but it is not later than v%s.', version, max);
			return callback([
				msg,
				'\nPossible Solutions:',
				'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
				'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`',
			]);
		}

		return callback(null, format('v%s is later than v%s.', version, max));
	});
};
