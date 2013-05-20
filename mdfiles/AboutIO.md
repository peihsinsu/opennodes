跟IO有關的官方套件
====

## fs套件

fs套件提供讀取檔案系統的一些操作方式，而官方針對操作大多實作了有帶Sync跟沒帶Sync的兩個版本，其中有Sync的function都是屬於同步的操作方式，可以直接回傳值回來，而沒有Sync的function則是會有callback，在callback中接入回傳值，同時也帶入error訊息供判斷。

<pre class="code" data-js="basic/001-readdir.js"></pre>

<pre class="code" data-js="basic/002-readdir.js"></pre>

<pre class="code" data-js="basic/002-readFile.js"></pre>

<pre class="code" data-js="basic/002-deleteFile.js"></pre>