$(document).ready(function () {
  let $win_n = $(window).width();
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

  if($win_n<=1499){
    $('.nav__item').click(function () {
      if($(this).children('.nav-sub__list').css("display") === "none"){
        $('.nav-sub__list').slideUp(300);
        $(this).children('.nav-sub__list').slideDown(300);
        $('.nav__item img').removeClass('rotate-arrow-down')
          .addClass('rotate-arrow-default');
        $(this).children('img').removeClass('rotate-arrow-default')
          .addClass('rotate-arrow-down');
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
      } else {
        $('.nav__item img').removeClass('rotate-arrow-down')
          .addClass('rotate-arrow-default');
        $('.nav-sub__list').slideUp(300);
        $('.nav__item').removeClass('active');

      }
    })
  } else {
    $('.nav__item').mouseenter(function () {
      $(this).children('.nav-sub__list').fadeIn(300);
      $(this).addClass('active');
    });
    $('.nav__item').mouseleave(function () {
      $('.nav-sub__list').fadeOut(300);
      $('.nav__item').removeClass('active');
    });
  }







/*  const item = $('.nav__item');
  item.on('click', function (e) {
    let clicked = $(this);
    item.each(function () {
            if(clicked !== $(this).children('img').hasClass('rotate-arrow-down')) {
              $(this).children('img').removeClass('rotate-arrow-down');
              $(this).children('img').addClass('rotate-arrow-default');
              $(this).children('.nav-sub__list').slideUp(300);
            } else {
              return;
            }
          });
    if($(this).children('img').hasClass('rotate-arrow-default')){
      $(this).children('img').removeClass('rotate-arrow-default');
      $(this).children('img').addClass('rotate-arrow-down');
      $(this).children('.nav-sub__list').slideDown(300);
    }  else {
      $(this).children('img').addClass('rotate-arrow-down');
      $(this).children('img').removeClass('rotate-arrow-default');
      $(this).children('.nav-sub__list').slideUp(300);
    }
  });*/

  // item.each(function () {
  //   $(this).on('click', function (e) {
  //     let clicked = $(this);
  //     // item.each(function () {
  //     //
  //     //   if($(this).children('img').hasClass('rotate-arrow-down')) {
  //     //     $(this).children('img').removeClass('rotate-arrow-down');
  //     //     $(this).children('img').addClass('rotate-arrow-default');
  //     //     $(this).children('.nav-sub__list').slideUp(300);
  //     //     return;
  //     //   }
  //     // });
  //     e.preventDefault();
  //     if(clicked.children('img').hasClass('rotate-arrow-default')){
  //       clicked.children('img').removeClass('rotate-arrow-default');
  //       clicked.children('img').addClass('rotate-arrow-down');
  //       clicked.children('.nav-sub__list').slideDown(300);
  //     }  else {
  //       clicked.children('img').addClass('rotate-arrow-down');
  //       clicked.children('img').removeClass('rotate-arrow-default');
  //       clicked.children('.nav-sub__list').slideUp(300);
  //       return;
  //     }
  //
  //
  //   })
  // });

  function checkWidth() {
    let windowWidth =  $(window).width();
    console.log(windowWidth);
    if(windowWidth <= 1499) {
      $('.nav-sub__list').removeClass('brand oil buy news');
      $('.nav__list').css('display', 'none');
    } else {
      $('.nav__list').css('display', 'flex');
      const subList = document.querySelectorAll('.nav-sub__list');
      subList[0].classList.add('brand');
      subList[1].classList.add('oil');
      subList[2].classList.add('buy');
      subList[3].classList.add('news');
    }
  }

  checkWidth();
  //
  // $(window).resize(function(){
  //   checkWidth();
  // });
});

