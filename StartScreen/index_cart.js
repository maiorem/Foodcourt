

var shopingList = [];


function Cart(selectSort, selectMenu, sPrice) {
    this.sort = selectSort;
    this.menu = selectMenu;
    this.price = sPrice;
}


function createShoping() {

    var buttom = document.querySelector(".menu_btn");

    var sort = "dessert";
    var menu = $('.menu_btn').val();
    var price =buttom.getAttribute("data-value");


    shopingList.push(new Cart(sort, menu, price));

    cart_list();
    setLocal();

}


function getSumPrice() {

}


function deleteCart(idx) {
    shopingList.splice(idx, 1);
    cart_list();
    setLocal();
}



function cart_list() {
    var delBtn = document.createElement("button");
    delBtn.innerText="x";
    delBtn.addEventListener("click", deleteCart);

    var list = '';
    list+='<table id="cart_listb">';
    for (var idx = 0; idx < shopingList.length; idx++) {
        list += '<tr>     <td>' + idx + '</td>';
        list += '     <td>' + shopingList[idx].sort + '</td>';
        list += '     <td>' + shopingList[idx].menu + '</td>';
        list += '     <td> <select><option>1</option><option>2</option><option>3</option><option>4</option></select></td>';
        list += '     <td>' + shopingList[idx].price + '</td>';
        list += '     <td> <a href="javascript:deledteCart('+idx+')>삭제</a> </td></tr>';
    }   
    list+='</table>';
    $('#cart_listb').html(list);
}



function initStore() {

    var data = localStorage.getItem('foodcart');
    if (data == null) {
        var jdata = JSON.stringify(shopingList);
        localStorage.setItem('foodcart', jdata);
    } else {
        shopingList = JSON.parse(data);
    }

}



//로컬저장소에 저장
function setLocal() {
    var jsondata = JSON.stringify(shopingList);
    localStorage.setItem('foodcart', jsondata);
}

$(document).ready(function () {

    initStore();
    cart_list();
    $('.menu_btn').click(createShoping);

});


