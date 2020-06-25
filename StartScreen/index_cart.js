

var shopingList = [];


function Cart(selectSort, selectMenu, sPrice) {
    this.sort = selectSort;
    this.menu = selectMenu;
    this.price = sPrice;
}


function createShoping() {

    var sort="dessert";
    var menu=$('h3', this).html();
    var price=$('p', this).html();

    shopingList.push(new Cart(sort, menu, price));

    cart_list();
    setLocal();

    return false;

}


function getSumPrice() {

}


function deleteCart(idx) {
    shopingList.splice(idx, 1);
    cart_list();
    setLocal();
}



function cart_list() {

    var list = '';
    list +='<table id="cart_list">';
    list += '<tr>';
    list += '<th>번호</th>';
    list += '<th>분류</th>';
    list += '<th>메뉴</th>';
    list += '<th>수량</th>';
    list += '<th>금액</th>';
    list += '<th></th></tr>';
    

    for (var idx = 0; idx < shopingList.length; idx++) {
        list += '<tr>     <td>' + idx + '</td>';
        list += '     <td>' + shopingList[idx].sort + '</td>';
        list += '     <td>' + shopingList[idx].menu + '</td>';
        list += '     <td> <input type="number" value="1"></td>';
        list += '     <td>' + shopingList[idx].price + '</td>';
        list += '     <td> <a href="javascript:deleteCart('+idx+')>삭제</a> </td></tr>';
    }   
    list+='</table>';

    $('#cart_list').html(list);
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
    $('div.menu_cell').click(createShoping);

});


