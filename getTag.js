'use strict';

module.exports = function getTag() {
	return process.env.npm_config_tag || 'latest';
};
