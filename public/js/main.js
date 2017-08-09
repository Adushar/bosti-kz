fimg.onclick = function Doctor() {
    $("ul.nav li:first-child a").addClass('active');
    $( "#simg" ).hide();
    $('#fimg').css({"padding-left": "10vw", "padding-right": "0"});
    $('#main').css({"text-align": "inherit", "padding-top": "25vh", "height": "124vh"});
    $('#fsvg').css("display", "inline-block");
    $("#main #fsvg").addClass('animated fadInLeft'); //Анимация для нижнего блока

    TandP.onclick = function() {
      $('#main').css("padding-top", "20vh")
      $('#bottom_menu').show(); //видимость нижнего меню
      $('#ssvg').css("display", "inline-block");
      $("#main #bottom_menu").addClass('animated fadeInUp'); //Анимация для нижнего блока
      $("#main #ssvg").addClass('animated fadInLeft');
      $('#SBlock').show();
    }
  };
