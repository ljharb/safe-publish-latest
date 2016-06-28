'use strict';

module.exports = function fakeTag(tag) {
	// eslint-disable-next-line camelcase
	return { npm_config_tag: tag };
};

