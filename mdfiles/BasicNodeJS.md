Basic Node.js
====

隨著Node.js的普及，Node.js的教學已經有許多，不論是文章還是電子書，甚至實體書... 本網站學習的目的不在打好Node.js的基礎，而是在分享與介紹常用的各類套件，因此這邊只稍微提一下一些基礎的概念，目的不在求入門的初學者可以快速學會，而是在給寫很久卻迷惘的開發者一個重新複習的機會。

## Install Node

目前Node.js提供各種版本的實作品，並且提供source code讓高手進行compile的動作，大家可以在這個網址找到相關的安裝程式：

http://nodejs.org

這裡就不介紹那種點一點就裝好的過程，我們來看看使用source code compile的步驟(PS:我習慣把node安裝在/opt/node下面，對應到的執行檔會是/opt/node/bin/node)：

* 下載source code: http://nodejs.org/dist/v0.10.7/node-v0.10.7.tar.gz (一般官網提供的載點如左所示，需要的話也可以直接使用：http://nodejs.org/dist ，找看看您需要的版本)
* 解壓縮
```
# tar -xzf node-v0.10.7.tar.gz
```
* 檢查環境與設定
```
# cd node-v0.10.7
# configure --prefix=/opt/node
```
* 編譯與安裝
```
# make && make install
```
* 設定環境變數
```
# export PATH=/opt/node/bin:$PATH
```

以上，如果順利的話，你的node.js就安裝好了，可以透過下面指令檢查

* 檢查版本
```
# node -v
```
* 檢查安裝路徑
```
# which node
```

如果上面版本與路徑跟您所安裝的相同，那代表大功告成啦！

## NVM

nvm是一套node.js版本管理的方式，可以在：https://github.com/creationix/nvm 找到相關的安裝與設定資訊，下面節錄安裝過程：

```
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

使用nvm的方式也不難

安裝node.js 0.8.x版本
```
nvm install 0.8
```

使用node.js 0.8版本
```
nvm use 0.8
```

## 學習資源介紹

* NodeJS.tw為台灣官網，提供相當多的學習資源與討論: http://nodejs.tw
* 由NodeJS.tw官方夥伴編輯的第一本Node.js中文電子書：http://book.nodejs.tw/