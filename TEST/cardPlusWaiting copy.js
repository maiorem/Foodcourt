
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
  
  
    

    // When the user clicks on the button, open the modal 


    setTimeout(function () {
      wrap01.style.display = "none";
      
      if(wrap01.style.display='none'){
      wrap02.style.display='block';
     }
    }, 6000);


    // setTimeout(function () {
    //   wrap02.style.display = "block";
    // }, 6000);
    
    // setTimeout(function(){


  
  
    //  btn.onclick = function() {
    //     modal.style.display = "block";
    //   }
  
    // When the user clicks on <span> (x), close the modal
    setTimeout(function () {
      wrap03.style.display = "none";
      wrap02.style.display="none";
      orderPop.style.display = "none";
      wrap_kiosk.style.display= "none";
      modalWrap.style.display= "none";
      overlay2.style.display = "none";


      

      //첫화면
      first.style.display="block";


    }, 1000*10);
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
