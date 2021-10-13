# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.5](https://github.com/ljharb/safe-publish-latest/compare/v1.1.4...v1.1.5) - 2021-10-13

### Commits

- [Tests] migrate tests to Github Actions [`306a814`](https://github.com/ljharb/safe-publish-latest/commit/306a814b7dc35d29e33c4b62acadd03650e3a7a5)
- [actions] use `node/install` instead of `node/run`; use `codecov` action [`0b1f0d3`](https://github.com/ljharb/safe-publish-latest/commit/0b1f0d33aedaee733b87dd5188864b203e39fb1b)
- [meta] do not publish Github Actions workflows [`a2ab827`](https://github.com/ljharb/safe-publish-latest/commit/a2ab8273c32a6f75ee64a8672d284d7cfd05ffc1)
- [actions] add automatic rebasing / merge commit blocking [`cbd2de7`](https://github.com/ljharb/safe-publish-latest/commit/cbd2de77507c8910702c039c53cba21651f88c37)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `tape` [`acf1126`](https://github.com/ljharb/safe-publish-latest/commit/acf1126f940c53fea74dca0d62ae9cedbbe4ab5c)
- [actions] add "Allow Edits" workflow [`c3ca2a5`](https://github.com/ljharb/safe-publish-latest/commit/c3ca2a5ccff1e633754320a65d1cb034906664fe)
- [actions] update codecov uploader [`bc1efe2`](https://github.com/ljharb/safe-publish-latest/commit/bc1efe206f1794f48b651f0e3853ada27e16ee66)
- [Tests] move node 0.8 to optionals; npm 1 can no longer talk to the registry [`d28522c`](https://github.com/ljharb/safe-publish-latest/commit/d28522cf4b4605a02e2b94ea373fbd2cc46432b6)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`; add `aud` [`7e907d3`](https://github.com/ljharb/safe-publish-latest/commit/7e907d3262ca86312e8dca4ffb9fa284588b4492)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `tape` [`21f3e68`](https://github.com/ljharb/safe-publish-latest/commit/21f3e68569f29cb417b3e6e250907b0b58c155fa)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape` [`4445553`](https://github.com/ljharb/safe-publish-latest/commit/4445553663b96e432546d3b9a0e6d6cdeb7299b2)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape` [`d93dc40`](https://github.com/ljharb/safe-publish-latest/commit/d93dc40f9e610aec3b0c05e0963d903c3b4094d8)
- [meta] use `prepublishOnly`, for npm 7+ [`6b09795`](https://github.com/ljharb/safe-publish-latest/commit/6b0979556b0c42374ca6f8e0d8f42a7835c82fa7)
- [Tests] run `nyc` on all tests [`4fb3862`](https://github.com/ljharb/safe-publish-latest/commit/4fb3862ef2c3dd1326d949dd252fefd30b76d1c5)
- [Deps] update `semver` [`b7a2751`](https://github.com/ljharb/safe-publish-latest/commit/b7a2751d6e087a6ebb3dc17d5a2fe8fb31ff755e)
- [Deps] update `yargs` [`0204f2f`](https://github.com/ljharb/safe-publish-latest/commit/0204f2f906d85fc830f93612b0293ff6f386e267)
- [meta] disable audits, due to npm 7 bug not yet fixed [`012850c`](https://github.com/ljharb/safe-publish-latest/commit/012850c5de22f5902de02b6a41465f4dbf658a4c)
- [Deps] update `yargs` [`ed717b7`](https://github.com/ljharb/safe-publish-latest/commit/ed717b7e35af531886e6931b63dec6145f72fda9)
- [Deps] update `in-publish` [`d539693`](https://github.com/ljharb/safe-publish-latest/commit/d539693a2cf9e00eb63f55ed13be9a503497b5e4)
- [Tests] only audit prod deps [`2a7c3f8`](https://github.com/ljharb/safe-publish-latest/commit/2a7c3f8c9e3626ad7033b55114ceb47cfa9ec41e)
- [actions] switch Automatic Rebase workflow to `pull_request_target` event [`b4433a9`](https://github.com/ljharb/safe-publish-latest/commit/b4433a90da55831c669b3d929788dc1484f452de)

<!-- auto-changelog-above -->

1.1.5 / 2021-10-13
==================
  * [Deps] update `yargs`, `in-publish`, `semver`
  * [meta] disable audits, due to npm 7 bug not yet fixed
  * [meta] use `prepublishOnly`, for npm 7+
  * [actions] update codecov uploader
  * [actions] use `node/install` instead of `node/run`; use `codecov` action
  * [actions] add "Allow Edits" workflow
  * [actions] switch Automatic Rebase workflow to `pull_request_target` event
  * [actions] add automatic rebasing / merge commit blocking
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`; add `aud`
  * [Tests] move node 0.8 to optionals; npm 1 can no longer talk to the registry
  * [Tests] migrate tests to Github Actions
  * [Tests] only audit prod deps
  * [Tests] run `nyc` on all tests

1.1.4 / 2019-11-08
==================
  * Revert "[Fix] peg `hosted-git-info` to `~2.7` due to breaking change in 2.8"
  * [Deps] update `semver`
  * [meta] add `funding` field
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`
  * [Tests] use shared travis-ci configs

1.1.3 / 2019-08-11
==================
  * [Fix] peg `hosted-git-info` to `~2.7` due to breaking change in 2.8
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`
  * [meta] create FUNDING.yml
  * [Deps] update `semver`
  * [Deps] update `semver`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`
  * [Tests] use `eclint` instead of `editorconfig-tools`
  * [Tests] use `npx aud` instead of `nsp` or `npm audit` with hoops
  * [Tests] up to `node` `v12.8`, `v11.15`, `v10.16`, `v6.17`

1.1.2 / 2018-08-06
==================
  * [Fix] ensure packages work on first publish (#11)
  * [Deps] update `semver`, `yargs`
  * [Deps] pin yargs to v7, since v8 drops node < 4 compat.
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp`, `tape`
  * [Tests] up to `node` `v10.8`, `v9.11`, `v8.11`, `v6.14`, `v4.9`; use `nvm install-latest-npm`
  * [Tests] add `editorconfig-tools`

1.1.1 / 2016-10-09
==================
  * [Fix] Ensure `allVersions` is an array, when there’s only one
  * [Deps] update `yargs`
  * [Dev Deps] update `eslint`, `nsp`, `tape`
  * [Tests] up to `node` `v6.6`, `v4.5`; improve test matrix

1.1.0 / 2016-09-19
==================
  * [Fix] ensure that the npm loglevel is known for `npm info`
  * [Fix] ensure publishing can work the first time (#4)
  * [New] add `—force-in-publish` to skip the “in publish” check
  * [Deps] update `semver`, `yargs`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp`
  * [Tests] fix tests since package x suddenly got updated

1.0.1 / 2016-07-30
==================
  * [Fix] Use `npm info $pkg versions -—json` rather than `nom-package-versions` (#1)
  * [Deps] update `semver`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp`

1.0.0 / 2016-06-28
==================
  * Initial release.
