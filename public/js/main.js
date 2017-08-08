fimg.onclick = function() {
  GSVG("somename", "test", 3, 6, "#fff");
    $("ul.nav li:first-child a").addClass('active');
    $( "#simg" ).hide();
    $('#fimg').css({"padding-left": "10vw", "padding-right": "0"});
    $('#main').css({"text-align": "inherit", "padding-top": "25vh", "height": "124vh"});
    $('#fsvg').css("display", "inline-block");
    $("#main #fsvg").addClass('animated zoomInLeft'); //Анимация для нижнего блока

    TandP.onclick = function() {
      $('#main').css("padding-top", "20vh")
      $('#bottom_menu').show(); //видимость нижнего меню
      $('#ssvg').show();
      $("#main #bottom_menu").addClass('animated zoomInLeft'); //Анимация для нижнего блока
      $("#main #ssvg").addClass('animated zoomInLeft');
      $('#SBlock').show();
    }
  };

 function GSVG(SVGname, SVGtarget, SVGtargetnum, SVGnumber, color1) {
  var list = document.getElementById(SVGtarget) //Поиск div'а
  var mainSVG = document.createElement('svg')  //Создание svg оболочки
  var SVGheight = SVGnumber * 30
  var Fline = SVGtargetnum * 15

  // Присвоение свойств оболчке
  mainSVG.id = SVGname + '-SVG';
  mainSVG.setAttribute("viewBox", "0 0 30 " + SVGheight);

list.appendChild(mainSVG)
  list = document.getElementById(mainSVG.id)
  lineSVG(0, Fline, 10, Fline)
  SVGheight -= 15
  lineSVG(10, 15, 10, SVGheight)
   function line(x1, y1, x2, y2) {
     var lineSVG = document.createElement('line')
     lineSVG.setAttribute("x1", x1)
     lineSVG.setAttribute("y1", y1)
     lineSVG.setAttribute("x2", x2)
     lineSVG.setAttribute("y2", y2)
     lineSVG.setAttribute("stroke-width", "1")
     lineSVG.setAttribute("stroke", color1)
     list.appendChild(lineSVG)
   }
};
