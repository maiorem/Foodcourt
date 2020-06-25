$(document).ready(function() {
    $('.trigger').click(function() {
       $('#overlay').fadeIn(300);
    });
 
    $('#close').click(function() {
       $('#overlay').fadeOut(300);
    });



   //  (팝업-사이드창) 
   // 사이드메뉴 선택시 속성추가
   $('.americano').click(function() {
      $('.americano').addClass('select_border');
   });

   $('.ice_americano').click(function() {
      $('.ice_americano').addClass('select_border');
   });

   $('.orange_juice').click(function() {
      $('.orange_juice').addClass('select_border');
   });

   $('.cola_sprite').click(function() {
      $('.cola_sprite').addClass('select_border');
   });


   //  (팝업-사이드창) 
   // 사이드메뉴 선택 후 ㅡ> 확인버튼 클릭시 ㅡ> 속성삭제
   $('#side_ok').click(function() {
      $('.side_menu_btn').removeClass('select_border');
   });


   // 작업중....
   // 메뉴선택시, 사이드창에 선택메뉴의 이미지로 변경
   // $('.tiramisu').click(function() {
   //    $('#select_menu_img>img').attr('src','../img_박혜미테스트/티라미수 (1).png')
   //    $('#tiramisu');
   // });


   // $('.menu_btn').click(function(){
   //    var id_check = $(this).attr("id");
   //    var img = $(this).find("img");
   //    $(id_check).click(function() {
   //       $('#select_menu_img>img').attr('src','id_check>img.src');
   //    });


   $('.menu_btn').click(function(){

      var img = $(this).find('img').attr(src);

      $('#select_menu_img>img').attr('src', img)

   });


 });


 
 




 