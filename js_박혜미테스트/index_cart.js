

var shopingList=[];


function Cart(selectSort, selectMenu, sAmount, sPrice) {
    this.sort=selectSort;
    this.menu=selectMenu;
    this.amount=sAmount;
    this.price=sPrice;
}


function createShoping() {
    $('.btn').click(function(){
        var sort="korean";
        var menu=$('.tiraminu').val();
        var amount=amountSelect()+1;
        var price=$('.tiraminu').price;

        shopingList.push(new Cart(sort, menu, amount, price));
        cart_list();
        setLocal();
        
     })

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
 
          
    // initStore();
    // createList();

    // $('#createform').submit(createShoping);
    var buttom = document.querySelector(".tiramisu");
    var dataValue = buttom.getAttribute("data-value");

    alert(dataValue);


});


