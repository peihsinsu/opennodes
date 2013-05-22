Noder - Simple HTTP Server
========

* [中文說明](README.tw.md)


This is a simple web server write by node.js. You can quickly start a web server for outside access through one line. It's easy way for frontend web developer to test prototype page and need not to build a apache or other web server.
<div align="center">
<img src="http://peihsinsu.github.com/images/noder-intro.png" width="90%"/><br/>
Picture: Easy to use of noder!
</div>

#Install
Install using npm...
```bash
# sudo npm install noder -g
```
PS: The "sudo" will depend on your role of this computer.

#Usage
Default, server start at 1337 port...
```bash
# noder
Server running at http://127.0.0.1:1337/
```
## Advance usage:
You can also using the parameters to control the host, port for the service listen. And the allow or deny parameters for the filter of user query.
```bash
noder -h 192.168.1.205 -p 8080 -a png,html -d jpg
```
You can see the help page for the parameters.

## Help page:
Open the help page using "noder --help".
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

#Open Browser
Browser View http://127.0.0.1:1337/test.html (Assump that the test.html exist in the current folder)
```bash
# noder
Server running at http://127.0.0.1:1337/
Got fileType:html
<Buffer 3c 68 31 3e 48 45 4c 4c 4f 2e 2e 2e 3c 2f 68 31 3e 0a>
```

#Log level settup
We following the log4js to write log, see: https://github.com/nomiddlename/log4js-node.git. If you want to see more log in the program, you can try to modify the environment setting of "LOG_LEVEL":
In Linux or Mac, you can export like:
```
export LOG_LEVEL=INFO
```
In Windows, you can use "set" like:
```
set LOG_LEVEL=INFO
```

