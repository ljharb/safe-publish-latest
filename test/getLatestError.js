'use strict';

const test = require('tape');
const mockEnv = require('mock-env').morph;

const getLatestError = require('../');
const fakeTag = require('./_fakeTag');

test('getLatestError', (t) => {
	t.test('env var override', (st) => {
		st.plan(2);
		mockEnv(() => {
			getLatestError(null, null, {}, (error, result) => {
				st.error(error, 'there should be no error');
				st.equal(result, '$PUBLISH_LATEST_DANGEROUSLY override enabled.');
			});
		}, { PUBLISH_LATEST_DANGEROUSLY: 'true' });
	});

	t.test('non-"latest" tag', (st) => {
		st.plan(2);
		mockEnv(() => {
			getLatestError(null, null, {}, (error, result) => {
				st.error(error, 'there should be no error');
				st.equal(result, 'Non-latest dist-tag detected.');
			});
		}, fakeTag('anything but latest'));
	});

	t.test('"latest" tag', (st) => {
		st.plan(6);

		mockEnv(() => {
			st.test('when the package has no non-prerelease versions', (s2t) => {
				s2t.plan(2);
				getLatestError('abcde', '1.0.2', {}, (err, result) => {
					s2t.error(err, 'there should be no error');
					s2t.equal(result, 'No non-prerelease versions detected.');
				});
			});

			st.test('with a later version', (s2t) => {
				s2t.plan(2);
				getLatestError('def', '9999.0.0', {}, (err, result) => {
					s2t.error(err, 'there should be no error');
					s2t.equal(result, 'v9999.0.0 is later than v0.0.8.');
				});
			});

			st.test('with an earlier version', (s2t) => {
				s2t.plan(2);
				getLatestError('def', '0.0.5', {}, (err, result) => {
					s2t.notOk(result, 'no result');
					s2t.deepEqual(err, [
						'Attempting to publish v0.0.5 as "latest", but it is not later than v0.0.8.',
						'\nPossible Solutions:',
						'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
						'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`',
					]);
				});
			});

			st.test('with an existing version', (s2t) => {
				s2t.plan(2);
				getLatestError('def', '0.0.8', {}, (err, result) => {
					s2t.notOk(result, 'no result');
					s2t.deepEqual(err, [
						'Attempting to publish already-published version v0.0.8.',
					]);
				});
			});

			st.test('with a later prerelease version', (s2t) => {
				s2t.plan(2);
				getLatestError('def', '9999.0.0-prerelease.0', {}, (err, result) => {
					s2t.notOk(result, 'no result');
					s2t.deepEqual(err, [
						'Attempting to publish v9999.0.0-prerelease.0 as "latest", but it is a prerelease version.',
						'\nPossible Solutions:',
						'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
						'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`',
					]);
				});
			});

			st.test('with an earlier prerelease version', (s2t) => {
				s2t.plan(2);
				getLatestError('def', '0.0.4-prerelease.0', {}, (err, result) => {
					s2t.notOk(result, 'no result');
					s2t.deepEqual(err, [
						'Attempting to publish v0.0.4-prerelease.0 as "latest", but it is a prerelease version.',
						'\nPossible Solutions:',
						'\t1) Provide a dist-tag: `npm publish --tag=backport`, for example',
						'\t2) Use the very dangerous override: `PUBLISH_LATEST_DANGEROUSLY=true npm publish`',
					]);
				});
			});

			st.end();
		}, fakeTag('latest'));
	});

	t.test('nonexistent but valid package name', (st) => {
		st.plan(2);
		getLatestError('abcdef123', '1.0.0', {}, (err, result) => {
			st.error(err, 'there should be no error');
			st.equal(result, 'v1.0.0 is the first version published.');
			st.end();
		});
	});

	t.test('nonexistent but valid scoped package name', (st) => {
		st.plan(2);
		getLatestError('@ljharb/abcdef123', '1.0.0', {}, (err, result) => {
			st.error(err, 'there should be no error');
			st.equal(result, 'v1.0.0 is the first version published.');
			st.end();
		});
	});

	t.end();
});
