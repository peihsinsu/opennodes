Express
====

Express是一套Node.js的Web Framework，以EJS或Jade(或其他)為View Engine將Node.js的MVC做一個完整的封裝，學Node.js的朋友不能錯過！

## 套件資訊

<div class="pkginfo" data-module-name="express" data-show="version,dependencies"></div>

## Installation

一般安裝Express時，我們會需要使用到其下的CLI工具來產生專案，所以需要帶入-g的參數來安裝到環境中。

```
npm install express -g
```

## Sample Usage

使用express來產生專案

```
express [專案名稱] && cd [專案名稱] && npm install
```

上面指令使用&&是Linux來串接指令的方式，原則上上面有三個指令

* express [專案名稱]: 使用express指令來產生某個專案
* cd [專案名稱]: 切換到該專案資料夾下
* npm install: 特該專案將相依的package進行安裝

### 以下為實際執行範例

```
$ express ExpressPrj
create : ExpressPrj
create : ExpressPrj/package.json
create : ExpressPrj/app.js
create : ExpressPrj/views
create : ExpressPrj/views/layout.jade
create : ExpressPrj/views/index.jade
create : ExpressPrj/routes
create : ExpressPrj/routes/index.js
create : ExpressPrj/public
create : ExpressPrj/public/stylesheets
create : ExpressPrj/public/stylesheets/style.css
create : ExpressPrj/public/javascripts
create : ExpressPrj/public/images
dont forget to install dependencies:
$ cd ExpressPrj && npm install
```

上面指令完成後，會產生一個以剛剛給定的名稱的資料匣，express預設以jade作為view engine，在此需要修改一些設定方可使用express之ejs作為view engine，目前專案的檔案結構說明如下：

* app.js: 實際主程式進入點
* package.json: 專案定義檔，含一些版本資訊
* public: 置放靜態檔案處，如javascript, css, image, html檔案等資料
* view: view engine主要讀取資料匣，包含jade的頁面程式，簡單說就是node.js的server端程式位置
* routes: 預設放置專案中router之位置，並且透過export提供給專案載入使用

修改app.js檔案，增加使用ejs的定義
* 首先修改configure區段：
```
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "keyboard cat" }));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set("view options", {layout : true});
});
```

* 如果希望讓ejs用其他的副檔名，則可以參考下面設定：

```
app.set("view engine", "html");
app.set("views", __dirname + '/views');
app.register("html", ejs);
```

* 然後移除：app.get('/', routes.index);
* 增加app.get()如下：

```
app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});
```

* 在view之下新增layout.ejs檔案(express預設會找尋view下的layout.ejs作為樣板render頁面)

<pre class="code" data-js="express/index.html"></pre>


* 如欲使用其他樣板，可在router處增加額外樣板資訊 ：

```
app.get('/', function(req, res){
  res.render('index', {
    layout:'layout2',
    title: 'Express'
  });
});
```

* 在view下新增index.ejs檔案：

```html
<h1><%= title %></h1> 
<p>Welcome to <%= title %></p>
```

* 啓動server：
(首先開啓終端機，進入專案資料匣...)

```
# node app.js
```

* 檢視執行狀況： http://localhost:3000


