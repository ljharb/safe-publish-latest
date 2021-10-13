'use strict';

const test = require('tape');
const mockEnv = require('mock-env').morph;

const getTag = require('../getTag');
const fakeTag = require('./_fakeTag');

test('getTag', (t) => {
	mockEnv(
		() => { t.equal(getTag(), 'latest', 'empty tag => "latest"'); },
		fakeTag(''),
	);
	mockEnv(
		() => { t.equal(getTag(), 'foo', 'tag "foo" => "foo"'); },
		fakeTag('foo'),
	);
	mockEnv(
		() => { t.equal(getTag(), 'latest', 'tag "latest" => "latest"'); },
		fakeTag('latest'),
	);
	t.end();
});
