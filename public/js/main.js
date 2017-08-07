fimg.onclick = function() {
    $("ul.nav li:first-child a").addClass('active');
    $( "#simg" ).hide();
    $('#fimg').css("padding", "0 0 0 10vw");
    $('#main').css("text-align", "inherit");
    $('#main').css("padding-top", "20vh");
    $('#fsvg').css("display", "inline-block");
    $('#fsvg').show();
    $('#bottom_menu').show();
    $('#main').css("height", "124vh");
  };

/* function GSVG(SVGname, SVGtarget, SVGnumber) {
  var list = document.getElementById(SVGtarget) //Поиск div'а
  var mainSVG = document.createElement('svg')  //Создание svg оболочки
  var SVGwidth = SVGnumber * 30

  // Присвоение свойств оболчке
  mainSVG.id = SVGname + '-SVG'
  mainSVG.viewbox = '0 0 30 ' + SVGwidth
  mainSVG.setAttribute("viewBox", "0 0 30 " + SVGwidth);

list.appendChild(mainSVG)
  list = mainSVG.id
   var lineSVG = document.createElement('line')
   SVGwidth =- 30

   function line(x1, y1, x2, y2) {
     var lineSVG = document.createElement('line')
     lineSVG.setAttribute("x1", StartX)
     lineSVG.setAttribute("y1", StartY)
     lineSVG.setAttribute("x1", StartX)
     lineSVG.setAttribute("x1", StartX)
   }
};
*/
