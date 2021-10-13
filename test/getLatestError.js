'use strict';

const test = require('tape');
const { morph } = require('mock-env');

const mockEnv = async (callback, env) => new Promise((resolve) => {
	resolve(morph(callback, env));
});

const getLatestError = require('../');
const fakeTag = require('./_fakeTag');

function testResult(fn, env, expected) {
	return async (t) => {
		const result = await mockEnv(
			fn,
			env,
		);
		t.equal(result, expected);
	};
}

function testError(fn, env, expected) {
	return async (t) => mockEnv(fn, env).catch((e) => {
		t.deepEqual(e, expected);
	});
}

test('getLatestError', (t) => {
	t.test('env var override', testResult(
		() => getLatestError(null, null),
		{ PUBLISH_LATEST_DANGEROUSLY: 'true' },
		'$PUBLISH_LATEST_DANGEROUSLY override enabled.',
	));

	t.test('non-"latest" tag', testResult(
		() => getLatestError(null, null),
		fakeTag('anything but latest'),
		'Non-latest dist-tag detected.',
	));

	t.test('"latest" tag', async (st) => {
		const latest = fakeTag('latest');

		st.test('when the package has no non-prerelease versions', testResult(
			() => getLatestError('abcde', '1.0.2'),
			latest,
			'No non-prerelease versions detected.',
		));

		st.test('when the package has no non-prerelease versions', testResult(
			() => getLatestError('abcde', '1.0.2'),
			latest,
			'No non-prerelease versions detected.',
		));

		st.test('with a later version', testResult(
			() => getLatestError('def', '9999.0.0'),
			latest,
			'v9999.0.0 is later than v0.0.8.',
		));

		st.test('with an earlier version', testError(
			() => getLatestError('def', '0.0.5'),
			latest,
			[
				'Attempting to publish v0.0.5 as "latest", but it is not later than v0.0.8.',
				'\nPossible Solutions:',
				'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
				'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`',
			],
		));

		st.test('with an existing version', testError(
			() => getLatestError('def', '0.0.8'),
			latest,
			'Attempting to publish already-published version v0.0.8.',
		));

		st.test('with a later prerelease version', testError(
			() => getLatestError('def', '9999.0.0-prerelease.0'),
			latest,
			[
				'Attempting to publish v9999.0.0-prerelease.0 as "latest", but it is a prerelease version.',
				'\nPossible Solutions:',
				'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
				'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`',
			],
		));

		st.test('with an earlier prerelease version', testError(
			() => getLatestError('def', '0.0.4-prerelease.0'),
			latest,
			[
				'Attempting to publish v0.0.4-prerelease.0 as "latest", but it is a prerelease version.',
				'\nPossible Solutions:',
				'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
				'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`',
			],
		));
	});

	t.test('nonexistent but valid package name', testResult(
		() => getLatestError('abcdef123', '1.0.0'),
		null,
		'v1.0.0 is the first version published.',
	));

	t.test('nonexistent but valid scoped package name', testResult(
		() => getLatestError('@ljharb/abcdef123', '1.0.0'),
		null,
		'v1.0.0 is the first version published.',
	));

	t.end();
});
