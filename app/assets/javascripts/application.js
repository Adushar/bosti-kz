// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
$(document).ready(function() {
  var paramname = 'target1'
  var saveURL = window.location.href;
  window.setTimeout(function(){
    if (getParameterByName("target1") && getParameterByName("target1").indexOf("img") != -1) {
      $("#" + getParameterByName("target1")).trigger("click");
      while (getParameterByName(paramname) != null) {
        var number = (Number(paramname.slice(-1)) + 1);
        paramname = "target" + number;
        $('#' + paramname.slice(-1) + getParameterByName(paramname, saveURL)).click();
      }
      if (getParameterByName("id", saveURL)) {bottom_punct(getParameterByName("id", saveURL));}
    }
  }, 100);
  $( "#fimg" ).click(function() {
    $("#fimg").nextAll().hide();
    $("#fimg").nextAll().children().hide();
    $('#doktor-line-1').show();
    $('#doktor-line-1 div').show();
    $(".fstitalic").removeClass("fstitalic");
    $("#mimg, #simg, #bottom_menu").hide();
    $("#home-t").css({"margin": "0 0 4em 5vw"});
    // Изменение ссылки
    updateParameterByName("target1", this.id);
    removeParameterByName("target2");
    removeParameterByName("target3");
    removeParameterByName("target4");
    removeParameterByName("id");
  });
  $( ".lines div a" ).click(function() {
    var td = $(this).closest( "td" )
    $("#bottom_product").hide();
    td.nextAll().hide();
    td.nextAll().children().hide();
    $("#" + this.closest( "td" ).id + " div div a").removeClass("fstitalic");
    td.nextAll().find(".fstitalic").removeClass("fstitalic");
    $(this).addClass("fstitalic");
    $("." + this.id.slice(1)).show();
    $("." + this.id.slice(1)).closest( "td" ).show();
    bottom_menu(this.id.slice(1));
    cleanURL(this.id.substring(0,1));
    updateParameterByName("target" + this.id.substring(0,1), this.id.slice(1));
  });
  //При закритии bottom_product
  $( "#bottom_product a" ).click(function() {
    $("#bottom_product").hide();
    $("#bottom_menu").show();
    removeParameterByName("id");
  });
});
//Активируем bottom_punct
function bottom_punct(id) {
  var NumOfRuns = 1
  $("#bottom_menu").hide();
  $("#bottom_product").show();
  alert("punct");
  //Фильтрация значений с таблицы review
  $.each(gon.review, function(index, value) {
    if (value.id == id && value.html) {
      //Добавляем значение в ссылку
      updateParameterByName("id", id);
      //Чистим код
      $('#bottom_product a').nextAll().remove();
      //Добавляем код на страницу
      $("#bottom_product").append(value.html);
      $(".review_left").append(`<center><a id="downloadPDF" target="_blank" href="` + value.downloadLink + `">Скачать PDF</a></center>`);
      //Опять фильтруем значения для "Мы также рекомендуем" и добавляем надпись
      $("#bottom_product").append(`<h3>Мы также рекомендуем в этом розделе:</h3>`);
      $.each(gon.articles, function(index2, value2) {
        if (index2 < 4 && $.inArray(value2.id.toString(), value.recomend.split(", ")) != -1) {
          $("#bottom_product").append(`<div id=`+ value2.review_id +` class="bottom_punct" onclick="bottom_punct(this.id)">` + value2.html + `</div>`);
        }
      });
      //Филтруем значения для "В других разделах продуктов:"(последние по дате обновления)
      $("#bottom_product").append(`<h3>В других разделах продуктов:</h3>`);
      $.each(gon.articles.reverse(), function(index2, value2) {
        if (NumOfRuns < 4 && value2.review_id != value.id) {
          NumOfRuns++
          $("#bottom_product").append(`<div id=`+ value2.review_id +` class="bottom_punct" onclick="bottom_punct(this.id)">` + value2.html + `</div>`);
        }
      });
    }
    else if ((value.id != id || value.html == "") && index == 1) {
      $('#bottom_product a').nextAll().remove();
      $("#bottom_product").append(`<h1> </h1><h2 style="font-size: 150px;">404</h2>`);
    }
  });
};
//Открыть нижнее меню
function bottom_menu(id) {
  $("#bottom_menu").show();
  $("#bottom_menu").html("<h1>Продукты</h1>");
  $.each(gon.articles.reverse(), function(index, value) {
    if (value.htmltarget == id) {
      $("#bottom_menu").append(`<div id=`+ value.review_id +` class="bottom_punct" onclick="bottom_punct(this.id)">` + value.html + `</div>`);
    }
  });
}
// Несколько функций по обработке ссылок
function cleanURL(maxnum) {
  var num = maxnum
  while (num < 4 ) {
    num++;
    removeParameterByName("target" + num);
  }
  removeParameterByName("id");
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function removeParameterByName(parameter)
{
  var url=document.location.href;
  var urlparts= url.split('?');

 if (urlparts.length>=2)
 {
  var urlBase=urlparts.shift();
  var queryString=urlparts.join("?");

  var prefix = encodeURIComponent(parameter)+'=';
  var pars = queryString.split(/[&;]/g);
  for (var i= pars.length; i-->0;)
      if (pars[i].lastIndexOf(prefix, 0)!==-1)
          pars.splice(i, 1);
  url = urlBase+'?'+pars.join('&');
  window.history.pushState('',document.title,url);
}
return url;
}

function updateParameterByName(key,val){
    var url = window.location.href;
    var reExp = new RegExp("[\?|\&]"+key + "=[0-9a-zA-Z\_\+\-\|\.\,\;]*");
    var UrlAdd = "&";

    if(reExp.test(url)) {
        var reExp = new RegExp("[\?&]" + key + "=([^&#]*)");
        var delimiter = reExp.exec(url)[0].charAt(0);
        url = url.replace(reExp, delimiter + key + "=" + val);
    } else {
        var newParam = key + "=" + val;
        if(url.indexOf('?') == -1){
          url += '?';
          UrlAdd = ""
        }
        if(url.indexOf('#') > -1){
            var urlparts = url.split('#');
            url = urlparts[0] +  "&" + newParam +  (urlparts[1] ?  "#" +urlparts[1] : '');
        } else {
            url += UrlAdd + newParam;
        }
    }
    window.history.pushState(null, document.title, url);
}
