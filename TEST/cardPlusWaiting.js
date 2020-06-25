
window.onload = function () {


  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var wrap01 = document.getElementById('wrap01');
  var wrap02 = document.getElementById('wrap02');
  var wrap03 = document.getElementById('wrap03');
  var orderPop = document.getElementById('order_outside');
  var wrap_kiosk = document.getElementById('wrap_kiosk');
  var modalWrap = document.getElementById('modal');
  var overlay2 = document.getElementById('overlay2');
  var first = document.getElementById('first');
  var btn_payment = document.getElementById('credit');

  

  // When the user clicks on the button, open the modal 


  setTimeout(function () {
    // wrap01.style.display = "none";
    // wrap02.style.display = "block";
    // if(wrap01.style.display='none'){
    // wrap02.style.display='block';
  //  }
  }, 1000*5);


  // setTimeout(function () {
    
  // }, 1000*5);
  
  // setTimeout(function(){
  btn_payment.onclick = function(){
    wrap01.style.display = "block";
    // wrap03.style.display = "none";
    // wrap02.style.display="none";
    orderPop.style.display = "none";
    wrap_kiosk.style.display= "none";
    modalWrap.style.display= "none";
    overlay2.style.display = "none";

    setTimeout(function () {
      wrap01.style.display = "none";
      wrap02.style.display = "block";
      
      // orderPop.style.display = "none";
      // wrap_kiosk.style.display= "none";
      // modalWrap.style.display= "none";
      // overlay2.style.display = "none";
      
      // $('.container').removeClass('modal-open');
      
    }, 1000*5);
    
    setTimeout(function(){
      wrap02.style.display="none";
      wrap03.style.display = "none";
      //첫화면
      first.style.display="block";
      first.setAttribute('class','container');
      
    }, 1000*10);


  }



  //  btn.onclick = function() {
  //     modal.style.display = "block";
  //   }

  // When the user clicks on <span> (x), close the modal
  // setTimeout(function () {
    // wrap03.style.display = "none";
    // wrap02.style.display="none";
    // orderPop.style.display = "none";
    // wrap_kiosk.style.display= "none";
    // modalWrap.style.display= "none";
    // overlay2.style.display = "none";
    //첫화면
    // first.style.display="block";
    // first.setAttribute('class','container');
    // $('.container').removeClass('modal-open');

  // }, 1000*10);
  // pr


  // span.onclick = function () {
  //   modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

}
