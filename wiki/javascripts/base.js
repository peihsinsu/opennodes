$(document).ready(function(){
  
  $('#md_menu').load(config.md_file_path + '/' + config.menu_page, function(){
    $('#menu').html(htmlUnescape(marked($('#md_menu').html()), mkdOpt));  
  });

  var p = getURLParameter('page');
  
  if(p && getURLParameter('page').split('#')[0]) {
    p = getURLParameter('page').split('#')[0];
    $('#md').load(config.md_file_path + '/' + p, function(){
      $('#page').html(htmlUnescape(marked($('#md').html(), mkdOpt))); 
      
      $('#page a').each(function(){
        $(this).append('<img width="15px" src="images/link.png"/>');
      });

      //TODO: still not used
      $('.github').each(function(v){
        $('#tmp').load(npm, function(){
          $('#gitpage').html(htmlUnescape(marked($('#tmp').html(), mkdOpt))); 
        });

        $(this).click(function(){
          $.blockUI({ 
            message: $('#gitpage'), 
            onOverlayClick: $.unblockUI,
            css: { 
              border: 'none', 
              padding: '15px', 
              opacity: .8, 
              color: '#fff', 
              top:  "30px",
              left: ($(window).width() - 810) /2 + 'px', 
              width: '810px'
            }
          }); 
        });
      });

      /**
       * 載入example目錄裝對應的js程式碼
       * 範例：<pre class="code" data-js="request/sample01.js"></pre>
       */
      $('.code').each(function(v){
        var path = $(this).attr('data-js');
        $(this).load('../examples/'+path);
        $(this).before('<h3>See:<a href="/examples/'+path+'">/examples/'+path+'</a></h3>');
      });

      /**
       * 載入package.json內容
       * 範例：<div class="pkginfo" data-module-name="request" data-show="version,dependencies"></div>
       */
      $('.pkginfo').each(function(v){
        var _this = $(this);
        var _module_name = _this.attr('data-module-name');
        if(_this.attr('data-show')){
          var _show = _this.attr('data-show').split(',');
          _show.push('info');
          _show.push('readme');
          $.getJSON('../node_modules/' + _module_name + '/package.json', function(data) {
            data.info = '<a href="../node_modules/' + _module_name +'/package.json">參考自套件package.json</a>';
            data.readme = '<a href="index.html?page=../node_modules/' + _module_name + '/README.md">README.md</a>';
            var _html = '<ul>';
            for(var i = 0 ; i < _show.length ; i++) {
              if(data[_show[i]])
              _html += '<li>' + _show[i] + ' : ' + (typeof(data[_show[i]]) == 'object' ? json2ul(data[_show[i]]) : data[_show[i]] )  + '</li>';
            }
            _html += '</ul>';
            _this.html(_html);
          });
        }
      });

    });

  } else {
    if($('#md'))
    $('#md').load(config.md_file_path + '/' + config.welcome_page, function(){
      $('#page').html(htmlUnescape(marked($('#md').html())));  
    });
  }

  $('#show').click(function() { 
    $.blockUI({ 
      message: $('#md'), 
      onOverlayClick: $.unblockUI,
      css: { 
        border: 'none', 
        padding: '15px', 
        backgroundColor: '#000', 
        '-webkit-border-radius': '10px',  
        '-moz-border-radius': '10px', 
        opacity: .8, 
        color: '#fff', 
        "vertical-align": "left",
        top:  "30px",
        left: ($(window).width() - 810) /2 + 'px', 
        width: '810px' 
      }
    }); 
  });

  $('#edit').click(function(){
    var edit_url = 'https://github.com/' + config.user + '/' + config.project + '/edit/' + 'gh-pages/' + config.md_folder_name + '/' + (p?p:config.welcome_page);
    window.open(edit_url);
  });

  $('#new').click(function(){
    var new_url = 'https://github.com/' + config.user + '/' + config.project + '/new/gh-pages';
    window.open(edit_url);
  });

});

var mkdOpt = {
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  langPrefix: 'language-',
  highlight: function(code, lang) {
    if (lang === 'js') {
      return highlighter.javascript(code);
    }
    return code;
  }
};

function getURLParameter(name) {
  var u = decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
  );

  if(u == 'null' || u == 'NULL') 
    return null;
  else
    return u;
}

function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

function htmlUnescape(value){
    return String(value)
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

function json2ul(json) {
  var _html = '<ul>';
  var keys = Object.keys(json);
  for(var i = 0; i<keys.length ; i++) {
    _html += '<li>' + keys[i] + ' : ' + ( typeof(json[keys[i]]) == 'Object' ? json2ul(json[keys[i]]) : json[keys[i]] ) + '</li>';
  }
  _html += '</ul>';
  return _html;
}

