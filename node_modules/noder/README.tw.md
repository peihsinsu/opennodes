Noder - Simple HTTP Server
========

* [English README](README.tw.md)

Noder是一個採用Node.js撰寫，簡單的Web Server實作品，你可以快速的透過指令將所在的目錄底下的資源變成一個HTTP可存取的環境。這提前端開發人員、測試人員與臨時許要HTTP資訊分享者一個簡單且快速的呈現方式，您不用再安裝Apache或是其他Web server來達到架設HTTP server就可以讓您的資源遨遊在網際網路上。

<div align="center">
<img src="http://peihsinsu.github.com/images/noder-intro.png" width="90%"/><br/>
Picture: 簡簡單單使用Noder!
</div>

#安裝
使用npm安裝Noder...
```bash
# sudo npm install noder -g
```
PS: 是否使用"sudo"將視您的權限需求。

#使用
預設的Noder指令啟動後，服務將會開放在1337 port...
```bash
# noder
Server running at http://127.0.0.1:1337/
```
## 進階使用:
您可以使用一些規劃好的參數來達到資源限制存取、使用不同Port、監聽於不同的host...等目的...

```bash
noder -h 192.168.1.205 -p 8080 -a png,html -d jpg
```
想了解更多參數，您可以使用help page來查看還支援哪些參數：

## Help page:
使用指令："noder --help"來開啟Help Page說明...

```bash
# noder --help

  Usage: noder [options]

  Options:

    -h, --help                     output usage information
    -V, --version                  output the version number
    -i, --host address <ip>        Specific host, like 192.168.1.1, default is all ip listened
    -p, --port <port>              Specific port, like 80,3000,8080, default is 1337
    -a, --allow <allow file type>  Specific the allowed file types that seprate by ",", default is all
    -d, --deny <deny file type>    Specific the denied file types that seprate by ",", default is none
```

#預覽
服務啟動後，您可以依照啟動後提示連入您的主機位置存取您的網路資源，例如：http://127.0.0.1:1337/test.html (這邊假設test.html已經存在於您現在的目錄下)

```bash
# noder
[2013-05-04 16:33:55.417] [INFO] [default] - Noder version: 0.0.3
[2013-05-04 16:33:55.431] [INFO] [default] - Server running at http://127.0.0.1:1337/
```

#LOG等級設定
我們使用log4js來管理log的顯示等級，您可以參考log4js git: https://github.com/nomiddlename/log4js-node.git，內建設定為INFO等級log，您可以透過改變環境變數來修改log的顯示等級，如：
Linux或Mac環境可以透過export來修改：
```
export LOG_LEVEL=INFO
```
Windows環境可以透過"set"來修改:
```
set LOG_LEVEL=INFO
```

