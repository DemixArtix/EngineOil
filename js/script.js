$(document).ready(function () {
  $('.nav__menu-btn').on('click', function (e) {
    e.preventDefault();
    const menu = $('.nav__list');
    if(!menu.hasClass('.nav__list-active')) {
      menu.addClass('.nav__list-active').slideDown(300);
      return;
    } else {
      menu.removeClass('.nav__list-active').slideUp(300);
    }
  });
  const item = $('.nav__item');
  item.each(function () {
    $(this).on('click', function (e) {
      let clicked = $(this);
      item.each(function () {

        if($(this).children('img').hasClass('rotate-arrow-down')) {
          $(this).children('img').removeClass('rotate-arrow-down');
          $(this).children('img').addClass('rotate-arrow-default');
          $(this).children('.nav-sub__list').slideUp(300);
        }
      });
      e.preventDefault();
      if(clicked.children('img').hasClass('rotate-arrow-default')){
        clicked.children('img').removeClass('rotate-arrow-default');
        clicked.children('img').addClass('rotate-arrow-down');
        clicked.children('.nav-sub__list').slideDown(300);
        return;
      }


    })
  });
  if(window.matchMedia('(max-width: 1499px)').matches) {
    $('.nav-sub__list').each(function () {
      $(this).removeClass('brand oil buy news');
    })
  } else {
    const subList = document.querySelectorAll('.nav-sub__list');
    subList[0].classList.add('brand');
    subList[1].classList.add('oil');
    subList[2].classList.add('buy');
    subList[3].classList.add('news');
  }
});

