# safe-publish-latest <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][9]][1]

Ensure that when you `npm publish`, the "latest" tag is only set for the truly latest version.

## Usage

Add "safe-publish-latest" to your `package.json`'s "prepublish" script.

It will only activate during an actual `npm publish` - it will silently do nothing during installs, and will error when run directly.

Example `package.json` excerpt with no other prepublish commands:
```json
{
	"scripts": {
		"prepublish": "safe-publish-latest"
	}
}
```

Example `package.json` excerpt with another prepublish command:
```json
{
	"scripts": {
		"prepublish": "safe-publish-latest && npm run build"
	}
}
```


## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/safe-publish-latest
[2]: http://versionbadg.es/ljharb/safe-publish-latest.svg
[3]: https://travis-ci.org/ljharb/safe-publish-latest.svg
[4]: https://travis-ci.org/ljharb/safe-publish-latest
[5]: https://david-dm.org/ljharb/safe-publish-latest.svg
[6]: https://david-dm.org/ljharb/safe-publish-latest
[7]: https://david-dm.org/ljharb/safe-publish-latest/dev-status.svg
[8]: https://david-dm.org/ljharb/safe-publish-latest#info=devDependencies
[9]: https://nodei.co/npm/safe-publish-latest.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/safe-publish-latest.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/safe-publish-latest.svg
[downloads-url]: http://npm-stat.com/charts.html?package=safe-publish-latest
