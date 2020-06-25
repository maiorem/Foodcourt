

var shopingList = [];

var menu = {};

function deleteCart(idx) {
    shopingList.splice(idx, 1);
    cart_list();
    setLocal();
}


// 해당 인덱스 사이드메뉴 리스트 이름들 리턴
function sideListName(idx) {
    for (var i = 0; i < shopingList[idx].side.length; i++) {
        var sideListN = shopingList[idx].side[i].side_name;
    }

    return sideListN;

}

// 해당 인덱스 사이드메뉴 총 가격 리턴
function sideListPrice(idx) {
    var sideListP=0;
    for (var i = 0; i < shopingList[idx].side.length; i++) {
        sideListP = sideListP+shopingList[idx].side[i].side_price;
    }

    return sideListP;
}


//장바구니 내 모든 수량 리턴
// function getTotalAmount() {

//     var totalAmount = 0

//     for (var idx = 0; idx < shopingList.length; idx++) {
//         totalAmount += shopingList[idx].samount;
//     }

//     $('#getAmount').html('주문 수량 : '+totalAmount);
// }



// //장바구니 내 모든 가격 리턴
// function getTotalPrice() {
//     var tPrice = 0

//     for (var idx = 0; idx < shopingList.length; idx++) {
//         tPrice += shopingList[idx].samount*shopingList[idx].sprice;
//     }

//     var totalPrice=totalPrice+tPrice;

//     $('#getPrice').html('주문 금액 : '+totalPrice);
// }



function cart_list() {

    var list = '';
    list += '<table id="cart_list">';
    list += '<tr>';
    list += '<th>번호</th>';
    list += '<th>메뉴</th>';
    list += '<th>사이드</th>';
    list += '<th>수량</th>';
    list += '<th>금액</th>';
    list += '<th></th></tr>';


    for (var idx = 0; idx < shopingList.length; idx++) {
        list += '<tr>     <td>' + idx + '</td>';
        list += '     <td>' + shopingList[idx].sname + '</td>';

        list += '     <td>' + sideListName(idx) + '</td>';

        list += '     <td> ' + shopingList[idx].samount + '</td>';
        list += '     <td>' + shopingList[idx].sprice + '</td>';
        list += '     <td> <a href="javascript:deleteCart(' + idx + ')">삭제</a> </td></tr>';
    }
    list += '</table>';

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
    setLocal();


    $('.trigger').click(function () {
        $('#overlay').fadeIn(300);
    });

    $('#close').click(function () {
        $('#overlay').fadeOut(300);
        $('.side_menu_btn').removeClass('select_border');
    });




    // 메뉴선택시, 사이드창에 선택메뉴의 이미지로 변경
    $('.menu_btn').click(function () {

        var img = $(this).find('img').attr('src');

        $('#select_menu_img>img').attr('src', img);

        var name = $(this).find('h3').text();
        $('#menu_info>h2').text(name);

        var price = $(this).find('p').text();
        $('.select_menu_price').text(price);

    });






    //  (팝업-사이드창) 
    // 사이드메뉴 선택시 속성추가
    $('.side_menu_btn').click(function () {
        if ($(this).hasClass('select_border')) {
            $(this).removeClass('select_border');

        } else {
            $(this).addClass('select_border');

        }


    });



    //  (팝업-사이드창) 
    // 사이드메뉴 선택 후 ㅡ> 확인버튼 클릭시 ㅡ> 속성삭제
    $('#side_ok').click(function () {
        $('.side_menu_btn').removeClass('select_border');
    });





    // 사이드창 선택사항 - 객체로
    $('.menu_btn').click(function () {
        var name = $(this).find('h3').text();
        var price = $(this).find('p').text();
        var price1 = price.replace(',', '');
        price = parseInt(price1);

        menu = {
            sname: name,
            sprice: price,
        }

    });



    var sidemenu = {};
    var sidemenuArr = [];

    // 사이드메뉴 선택. (여러개 선택시?)
    $('.side_menu_btn').click(function () {

        var amount = $('#select_count').find('input').val();

        // 만약에, 선택되어있다면, 
        if ($(this).hasClass('select_border')) {

            var sidename = $(this).find('h3').text();

            var sideprice = $(this).find('p').text();
            var price1 = sideprice.replace(',', '');
            sideprice = parseInt(price1);

        } else {
            sidename = 0;
            sideprice = 0;
        }

        sidemenu = {
            side_name: sidename,
            side_price: sideprice
        }

        sidemenuArr.push(sidemenu);

        menu.samount = amount;
        menu.side = sidemenuArr;

        shopingList.push(menu);
        cart_list();
        setLocal();


    });





    var order = $('#side_ok').click(function () {
        return menu;
    });




});








