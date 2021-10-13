# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2.0.0](https://github.com/ljharb/safe-publish-latest/compare/v1.1.5...v2.0.0) - 2021-10-13

### Commits

- [Breaking] `getLatestError`: refactor to use Promises [`f44edd4`](https://github.com/ljharb/safe-publish-latest/commit/f44edd4a111254011ec475b2b5ccb6abc120c79e)
- [Breaking] drop node &lt; 12 [`3a8d144`](https://github.com/ljharb/safe-publish-latest/commit/3a8d144bb4f4f2cd3403c7884ce9833335a6b804)
- [meta] add `auto-changelog` [`08cf254`](https://github.com/ljharb/safe-publish-latest/commit/08cf25452a35818016e2a1946b07df7dec75e91a)
- [readme] remove travis badge; add github actions/codecov badges [`48455b3`](https://github.com/ljharb/safe-publish-latest/commit/48455b38ff733c679b379552746626449e2a5b94)
- [Breaking] add `exports` [`222b068`](https://github.com/ljharb/safe-publish-latest/commit/222b068b45e3c649979445b203e1417d74c744ef)
- [Breaking] `getLatestError`: remove unused `options` param [`a3f5337`](https://github.com/ljharb/safe-publish-latest/commit/a3f533705deb6f2f69535b43caf88279d121c0af)
- [meta] editorconfig: ignore more stuff in coverage [`72dfebb`](https://github.com/ljharb/safe-publish-latest/commit/72dfebb780db60747cca3435987a58d9708851bf)

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
