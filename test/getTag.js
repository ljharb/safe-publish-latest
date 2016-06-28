'use strict';

var test = require('tape');
var mockEnv = require('mock-env').morph;

var getTag = require('../getTag');
var fakeTag = require('./_fakeTag');

test('getTag', function (t) {
	mockEnv(
		function () { t.equal(getTag(), 'latest', 'empty tag => "latest"'); },
		fakeTag('')
	);
	mockEnv(
		function () { t.equal(getTag(), 'foo', 'tag "foo" => "foo"'); },
		fakeTag('foo')
	);
	mockEnv(
		function () { t.equal(getTag(), 'latest', 'tag "latest" => "latest"'); },
		fakeTag('latest')
	);
	t.end();
});
