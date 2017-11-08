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
    }
  }, 100);
  $( "#fimg" ).click(function() {
    $("#fimg").nextAll().hide();
    $("#fimg").nextAll().children().hide();
    $('#doktor-line-1').show();
    $('#doktor-line-1 div').show();
    $(".fstitalic").removeClass("fstitalic");
    $("#mimg, #simg, #bottom_menu").hide();
    $("#home-t").css({"margin": "0 0 2em 5vw"});
    // Изменение ссылки
    updateParameterByName("target1", this.id);
    removeParameterByName("target2");
    removeParameterByName("target3");
    removeParameterByName("target4");
    removeParameterByName("id");
  });
  $( ".lines div a" ).click(function() {
    var td = $(this).closest( "td" )
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
});


// Несколько функций по обработке ссылок
function cleanURL(maxnum) {
  var num = maxnum
  while (num < 4 ) {
    num++;
    removeParameterByName("target" + num);
  }
  removeParameterByName("id");
}
function bottom_menu(id) {
  $("#bottom_menu").show();
  alert(id);
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
