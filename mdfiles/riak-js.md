riak-js
====

## 套件資訊

<div class="pkginfo" data-module-name="riak-js" data-show="version,dependencies"></div>

## 安裝Riak.js
```
npm install riak-js -g
```

## Sample
第一個Riak.js程式

<pre class="code" data-js="riak-js/sample01.js"></pre>

執行與顯示
```
#node /tmp/test.js 
[ { meta: 
     { bucket: 'airlines',
       key: 'KLM',
       vclock: 'a85hYGBgzGDKBVIcypz/fvoLt6/MYEpkzmNlOKbecYIvCwA=' },
    data: { fleet: 111, country: 'NL' } },
  { meta: 
     { bucket: 'airlines',
       key: 'KLM2',
       vclock: 'a85hYGBgzGDKBVIcypz/fvoLt6/KYEpkzGNl+KzecYIvCwA=' },
    data: { fleet: 111, country: 'NL' } } ]
```