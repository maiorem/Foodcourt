// Select 메뉴 오픈
$('.js-click-modal').click(function(){
  $('.container').addClass('modal-open');
});

//셀렉트 메뉴 닫기 (이전으로)
$('.js-close-modal').click(function(){
  $('.container').removeClass('modal-open');
});


// 세부메뉴 오픈
$('.js-click-modal_korea').click(function(){
  $('.modal').addClass('modal-selectMenu');
});

$('.js-click-modal_japan').click(function(){
  $('.modal').addClass('modal-selectMenu');
});

$('.js-click-modal_china').click(function(){
  $('.modal').addClass('modal-selectMenu');
});

$('js-click-modal_western').click(function(){
  $('.modal').addClass('modal-selectMenu');
});

$('js-click-modal_asian').click(function(){
  $('.modal').addClass('modal-selectMenu');
});

$('js-click-modal_dessert').click(function(){
  $('.modal').addClass('modal-selectMenu');
});

