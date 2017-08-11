fimg.onclick = function Doctor() {
    $( "#simg" ).hide();
    $('#fimg').css({"padding-left": "5vw", "padding-right": "0"});
    $('#main').css({"text-align": "inherit", "padding-top": "25vh", "height": "124vh"});
    $('#fsvg').css("display", "inline-block");
    $("ul.nav li:first-child a").addClass('active');
    $("#main #fsvg").addClass('animated fadInLeft'); //Анимация для нижнего блока

    TandP.onclick = function() {
      $('#main').css("padding-top", "20vh")
      $('#bottom_menu').show(); //видимость нижнего меню
      $('#ssvg').css("display", "inline-block");
      $("#main #bottom_menu").addClass('animated fadeInUp'); //Анимация для нижнего блока
      $("#main #ssvg").addClass('animated fadInLeft');
      $('#SBlock').show();
      $('#main').css("height", "auto");
      $('#bottom_menu').css("height", "auto");
      Arm.onclick = function() {
        tsvg.innerHTML = '<svg class="SVG" viewBox="0 0 30 120" direction="right"><line x1="0" y1="15" x2="10" y2="15" stroke-width="1" stroke="#000"></line><line x1="10" y1="15" x2="10" y2="105" stroke-width="1" stroke="#000"></line><g><line x1="10" y1="15" x2="28" y2="15" stroke-width="1" stroke="#000"></line><circle cx="28" cy="15" r="2" fill="#000"></circle></g><g><line x1="10" y1="45" x2="28" y2="45" stroke-width="1" stroke="#000"></line><circle cx="28" cy="45" r="2" fill="#000"></circle></g><g><line x1="10" y1="75" x2="28" y2="75" stroke-width="1" stroke="#000"></line><circle cx="28" cy="75" r="2" fill="#000"></circle></g><g><line x1="10" y1="105" x2="28" y2="105" stroke-width="1" stroke="#000"></line><circle cx="28" cy="105" r="2" fill="#000"></circle></g></svg><div class="NBlock" id="TBlock"><a id="a1">Тахикардия</a><a id="a2">Брадикардия</a><a id="a3">Ресинхронизация сердечной деятельности</a><a id="4">Внешние устройства</a></div>'
        $('#tsvg').css("display", "inline-block");
        $('#tsvg').css("transform", "translate(1%, -50%)");
      }
      Card.onclick = function() {
        tsvg.innerHTML = '<svg class="SVG" viewBox="0 0 30 150" direction="right"><line x1="0" y1="45" x2="10" y2="45" stroke-width="1" stroke="#b82c51"></line><line x1="10" y1="15" x2="10" y2="135" stroke-width="1" stroke="#b82c51"></line><g><line x1="10" y1="15" x2="28" y2="15" stroke-width="1" stroke="#b82c51"></line><circle cx="28" cy="15" r="2" fill="#b82c51"></circle></g><g><line x1="10" y1="45" x2="28" y2="45" stroke-width="1" stroke="#b82c51"></line><circle cx="28" cy="45" r="2" fill="#b82c51"></circle></g><g><line x1="10" y1="75" x2="28" y2="75" stroke-width="1" stroke="#b82c51"></line><circle cx="28" cy="75" r="2" fill="#b82c51"></circle></g><g><line x1="10" y1="105" x2="28" y2="105" stroke-width="1" stroke="#b82c51"></line><circle cx="28" cy="105" r="2" fill="#b82c51"></circle></g><g><line x1="10" y1="135" x2="28" y2="135" stroke-width="1" stroke="#b82c51"></line><circle cx="28" cy="135" r="2" fill="#b82c51"></circle></g></svg><div class="NBlock" id="TBlock"><a id="c1">Перикардиальные заплаты</a><a id="c2">Механические клапаны для сердца</a><a id="c3">Биологические клапаны для сердца</a><a id="c4">Аортальные графты с клапаном</a><a id="c5">Аксессуары для кардиохирургии SJM</a></div>'
        $('#tsvg').css("display", "inline-block");
        $('#tsvg').css("transform", "translate(1%, -20%)");
      }
      Elec.onclick = function() {
      tsvg.innerHTML = '<svg class="SVG" viewBox="0 0 30 150" direction="right"><line x1="0" y1="75" x2="10" y2="75" stroke-width="1" stroke="#b322b3"></line><line x1="10" y1="15" x2="10" y2="135" stroke-width="1" stroke="#b322b3"></line><g><line x1="10" y1="15" x2="28" y2="15" stroke-width="1" stroke="#b322b3"></line><circle cx="28" cy="15" r="2" fill="#b322b3"></circle></g><g><line x1="10" y1="45" x2="28" y2="45" stroke-width="1" stroke="#b322b3"></line><circle cx="28" cy="45" r="2" fill="#b322b3"></circle></g><g><line x1="10" y1="75" x2="28" y2="75" stroke-width="1" stroke="#b322b3"></line><circle cx="28" cy="75" r="2" fill="#b322b3"></circle></g><g><line x1="10" y1="105" x2="28" y2="105" stroke-width="1" stroke="#b322b3"></line><circle cx="28" cy="105" r="2" fill="#b322b3"></circle></g><g><line x1="10" y1="135" x2="28" y2="135" stroke-width="1" stroke="#b322b3"></line><circle cx="28" cy="135" r="2" fill="#b322b3"></circle></g></svg><div class="NBlock" id="TBlock"><a id="e1">Диагностические катетеры</a><a id="e2">Аблационные катетеры</a><a id="e3">Оборудование для ЭФИ и РЧА</a><a id="e4">3D картирование сердца</a><a id="e5">Аксессуары для ЭФИ SJM</a></div>'
      $('#tsvg').css("display", "inline-block");
      $('#tsvg').css("transform", "translate(1%, -20%)");
    }
    Neir.onclick = function() {
      tsvg.innerHTML = '<svg class="SVG" id="SVG2" viewBox="0 0 30 180"><line x1="0" y1="135" x2="10" y2="135" stroke-width="1" stroke="#172782"></line><line x1="10" y1="15" x2="10" y2="135" stroke-width="1" stroke="#172782"></line><g><line x1="10" y1="15" x2="28" y2="15" stroke-width="1" stroke="#172782"></line><circle cx="28" cy="15" r="2" fill="#172782"></circle></g><g><line x1="10" y1="75" x2="28" y2="75" stroke-width="1" stroke="#172782"></line><circle cx="28" cy="75" r="2" fill="#172782"></circle></g><g><line x1="10" y1="135" x2="28" y2="135" stroke-width="1" stroke="#172782"></line><circle cx="28" cy="135" r="2" fill="#172782"></circle></g></svg><div class="NBlock" id="TBlock"><a id="n1">Эпидуральная электростимуляция<br> спинного мозга (SCS)</a><a id="n2">Электростимуляция глубинных<br> структур головного мозга (DBS)</a><a id="n3">Шунтирующие системы, наружные дренажи, вентрикулярные<br> резервуары и мониторинг ВЧД</a></div>'
      $('#tsvg').css("display", "inline-block");
      $('#tsvg').css("transform", "translate(1%, -15%)");
      $('#tsvg').css("margin-top", "2%");
    }
    Rant.onclick = function() {
      tsvg.innerHTML = '<svg class="SVG" viewBox="0 0 30 215" direction="right"><line x1="0" y1="165" x2="10" y2="165" stroke-width="1" stroke="#0f0f0f"></line><line x1="10" y1="15" x2="10" y2="200" stroke-width="1" stroke="#0f0f0f"></line><g><line x1="10" y1="15" x2="28" y2="15" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="15" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="45" x2="28" y2="45" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="45" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="75" x2="28" y2="75" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="75" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="105" x2="28" y2="105" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="105" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="165" x2="28" y2="165" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="165" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="200" x2="28" y2="200" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="200" r="2" fill="#0f0f0f"></circle></g></svg><div class="NBlock" id="TBlock"><a id="r1">Визуализация сосудов сердца - OCT</a><a id="r2">Внутрисердечные и сосудистые окклюдеры Amplatzer</a><a id="r3">Измерение внутрисосудистогов давления - FFR</a><a id="r4">Инструменты для периферической <br>ангиопластики и стентирования</a><a id="r5">Аксессуары для коронарографий</a><a id="r6">Инструменты для коронарной ангиопластики и стентирования</a></div>'
      $('#tsvg').css("display", "inline-block");
      $('#tsvg').css("transform", "translate(1%, 2%)");
    }
  Perf.onclick = function() {
      tsvg.innerHTML = '<svg class="SVG" viewBox="0 0 30 150" direction="right"><line x1="0" y1="135" x2="10" y2="135" stroke-width="1" stroke="#0f0f0f"></line><line x1="10" y1="15" x2="10" y2="135" stroke-width="1" stroke="#0f0f0f"></line><g><line x1="10" y1="15" x2="28" y2="15" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="15" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="45" x2="28" y2="45" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="45" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="75" x2="28" y2="75" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="75" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="105" x2="28" y2="105" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="105" r="2" fill="#0f0f0f"></circle></g><g><line x1="10" y1="135" x2="28" y2="135" stroke-width="1" stroke="#0f0f0f"></line><circle cx="28" cy="135" r="2" fill="#0f0f0f"></circle></g></svg><div class="NBlock" id="TBlock"><a id="p1">Наборы для гемофильтрации</a><a id="p2">Наборы для кардиоплегии</a><a id="p3">Оксигенаторы</a><a>Канюли</a><a id="p4">ЭКМО</a></div>'
      $('#tsvg').css("display", "inline-block");
      $('#tsvg').css("transform", "translate(1%, 2%)");
    }
    }
  };

  Perf.oclick = function() {
    bottom_menu.innerHTML = '<% @articles.each do |article| %><div class="bottom_punct"><h2><%= article.topic %></h2><img src=<%= article.img %>><a><br><%= article.description %></a></div><% end %>'
  }
