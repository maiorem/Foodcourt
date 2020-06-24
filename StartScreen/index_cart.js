

var shopingList=[];


function Cart(selectSort, selectMenu, sAmount, sPrice) {
    this.sort=selectSort;
    this.menu=selectMenu;
    this.amount=sAmount;
    this.price=sPrice;
}


function createShoping() {
    var sort=$();
    var menu=$();
    var amount=$();
    var price=$();
    
    shopingList.push(new Cart(sort, menu, amount, price));
    createList();
    setLocal();
    return false;

}


function cart_list(idx) {
    var list='';
    list+='     <td>'+idx+'</td>';
    list+='     <td>'+cart[idx].sort+'</td>';    
    list+='     <td>'+cart[idx].menu+'</td>';    
    list+='     <td>'+cart[idx].amount+'</td>';    
    list+='     <td>'+cart[idx].price+'</td>';    
    return list;
}


function createList() {

    $('#cart_list<tdody').addClass('showList');

    for (var idx=0; idx<shopingList.length; idx++) {
        var infoHtml=cart_list(idx);
        $('<tr></tr>').html(infoHtml).appendTo('tbody.showList');
    }

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
    localStorage.setItem('food', jsondata);
}

$(document).ready(function () {
 
          
    initStore();
    createList();

    $('#createform').submit(createShoping);
    

});


