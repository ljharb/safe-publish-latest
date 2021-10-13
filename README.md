# safe-publish-latest <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Ensure that when you `npm publish`, the "latest" tag is only set for the truly latest version.

## Usage

Add "safe-publish-latest" to your `package.json`'s "prepublish" script, and install `in-publish`.

It will only activate during an actual `npm publish` - it will silently do nothing during installs, and will error when run directly.

Example `package.json` excerpt with no other prepublish commands:
```json
{
	"scripts": {
		"prepublishOnly": "safe-publish-latest",
		"prepublish": "not-in-publish || npm run prepublishOnly"
	}
}
```

Example `package.json` excerpt with another prepublish command:
```json
{
	"scripts": {
		"prepublishOnly": "safe-publish-latest && npm run build",
		"prepublish": "not-in-publish || npm run prepublishOnly"
	}
}
```


## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/safe-publish-latest
[npm-version-svg]: https://versionbadg.es/ljharb/safe-publish-latest.svg
[deps-svg]: https://david-dm.org/ljharb/safe-publish-latest.svg
[deps-url]: https://david-dm.org/ljharb/safe-publish-latest
[dev-deps-svg]: https://david-dm.org/ljharb/safe-publish-latest/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/safe-publish-latest#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/safe-publish-latest.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/safe-publish-latest.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/safe-publish-latest.svg
[downloads-url]: https://npm-stat.com/charts.html?package=safe-publish-latest
[codecov-image]: https://codecov.io/gh/ljharb/safe-publish-latest/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/safe-publish-latest/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/safe-publish-latest
[actions-url]: https://github.com/ljharb/safe-publish-latest/actions
