NPM使用
===

# 操作

## Help Page
協助頁面可以直接打"npm --help"來顯示可以協助的部份
```
npm --help

Usage: npm <command>

where <command> is one of:
    add-user, adduser, apihelp, author, bin, bugs, c, cache,
    completion, config, ddp, dedupe, deprecate, docs, edit,
    explore, faq, find, find-dupes, get, help, help-search,
    home, i, info, init, install, isntall, la, link, list, ll,
    ln, login, ls, outdated, owner, pack, prefix, prune,
    publish, r, rb, rebuild, remove, restart, rm, root,
    run-script, s, se, search, set, show, shrinkwrap, star,
    start, stop, submodule, tag, test, tst, un, uninstall,
    unlink, unpublish, unstar, up, update, version, view,
    whoami

npm <cmd> -h     quick help on <cmd>
npm -l           display full usage info
npm faq          commonly asked questions
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    /Users/simonsu/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@1.1.65 /usr/local/lib/node_modules/npm
```

## Search
NPM提供關鍵字搜尋功能，可以透過

```
# npm search noder
npm http GET https://registry.npmjs.org/-/all/since?stale=update_after&startkey=1368448152633
npm http 200 https://registry.npmjs.org/-/all/since?stale=update_after&startkey=1368448152633
NAME           DESCRIPTION                                                   AUTHOR           DATE              KEYWORDS
geonoder       A NodeJS client for geocoding/reverse address lookup with plug-in services. =dexterp37 2013-05-13 17:09  geocoder geocoding cach
noder          Node.js Simple Web Utility                                    =peihsinsu       2013-05-13 15:37  http server web
noderelict     Instrumentation for node                                      =blindsey        2011-08-28 20:53  node instrumentation performanc
noderest       Noderest a restify-mongo framework                            =jaisonjustus    2012-11-29 19:51  api rest framework
noderiaktools  Backup and restore for node json documents                    =stevewillcock   2013-02-14 21:17  riak
noderpc        A framework for building distributed services with NodeJS     =brstgt =lociii  2011-05-18 09:54  rpc rmi service distributed
noderpt        Node.js Report Utility                                        =peihsinsu       2013-03-29 01:26  report
```

## 檢視套件詳細設定(package.json)
使用npm show可以列出該套件的詳細資訊，大部分資訊記錄於套件底下的package.json，另外有包含程式上版的資訊喔！下面是執行範例，其中time欄位就是個版本publish的時間：
```
# npm show noder
npm http GET https://registry.npmjs.org/noder
npm http 304 https://registry.npmjs.org/noder

{ name: 'noder',
  description: 'Node.js Simple Web Utility',
  'dist-tags': { latest: '0.0.6' },
  versions:
   [ '0.0.1',
     '0.0.2',
     '0.0.3',
     '0.0.4',
     '0.0.5',
     '0.0.6' ],
  maintainers: 'peihsinsu <simonsu.mail@gmail.com>',
  time:
   { '0.0.1': '2013-03-29T02:13:21.133Z',
     '0.0.2': '2013-04-07T18:28:47.124Z',
     '0.0.3': '2013-05-04T11:06:21.644Z',
     '0.0.4': '2013-05-04T11:24:01.389Z',
     '0.0.5': '2013-05-13T13:54:20.591Z',
     '0.0.6': '2013-05-13T15:37:19.113Z' },
  author: 'Simon Su <simonsu.mail@gmail.com>',
  repository:
   { type: 'git',
     url: 'https://github.com/peihsinsu/noder' },
  version: '0.0.6',
  contributors: 'Simon Su <simonsu.mail@gmail.com>',
  dependencies:
   { underscore: '*',
     log4js: '*',
     commander: '*' },
  keywords: [ 'http', 'server', 'web' ],
  main: 'index',
  engines: { node: '>= 0.8.0' },
  directories: { bin: './bin', lib: './lib' },
  optionalDependencies: {},
  bin: { nhelp: 'bin/nhelp', noder: 'bin/noder' },
  readmeFilename: 'README.md',
  dist:
   { shasum: '1b7df135f2ac6a3ff1253105dab66fd634bf5cc0',
     tarball: 'http://registry.npmjs.org/noder/-/noder-0.0.6.tgz' } }
```
