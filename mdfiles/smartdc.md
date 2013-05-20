smartdc module
====

smartdc是一套Joyent原廠提供連線Joyent Cloud Platform - SmartDataCenter的套件，裡面提供CLI與node.js的操作方法，可以直接與cloudapi進行溝通，並且達到管理cloud machine相關的動作。

## 套件資訊

<div class="pkginfo" data-module-name="smartdc" data-show="version,dependencies"></div>

## Installation

安裝上，因為要預設把CLI也安裝到環境變數，所以加上"-g"參數，讓npm將CLI tools發佈在環境變數上。

```
npm install smartdc -g
```

## Sample Usage

<pre class="code" data-js="smartdc/test-smartdc.js"></pre>
