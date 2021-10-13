'use strict';

const { promisify } = require('util');
const cp = require('child_process');
const exec = promisify(cp.exec);
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

module.exports = async function getLatestError(name, version) {
	if (process.env.PUBLISH_LATEST_DANGEROUSLY === 'true') {
		return '$PUBLISH_LATEST_DANGEROUSLY override enabled.';
	}
	if (getTag() !== 'latest') {
		return 'Non-latest dist-tag detected.';
	}

	let json;
	try {
		({ stdout: json } = await exec(`npm info ${name} versions --json --loglevel=info`));
	} catch (err) {
		if ((/^npm ERR! code E404$/m).test(err)) {
			return `v${version} is the first version published.`;
		}
		throw [
			'Error fetching package versions:',
			err,
		];
	}

	let allVersions;
	try {
		allVersions = [].concat(JSON.parse(json));
	} catch (e) {
		throw [
			'Error parsing JSON from npm',
			e,
		];
	}

	const versions = allVersions.filter(isNotPrerelease);
	if (versions.length === 0) {
		return 'No non-prerelease versions detected.';
	}

	const max = maxSatisfying(versions, '*');
	if (eq(version, max)) {
		throw `Attempting to publish already-published version v${version}.`;
	}

	const greater = gtr(version, versions.join('||'));
	const isPre = isPrerelease(version);
	if (!greater || isPre) {
		const msg = isPre
			? format('Attempting to publish v%s as "latest", but it is a prerelease version.', version)
			: format('Attempting to publish v%s as "latest", but it is not later than v%s.', version, max);
		return [
			msg,
			'\nPossible Solutions:',
			'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
			'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`',
		];
	}

	return format('v%s is later than v%s.', version, max);
};
