//모바일 햄버거 버튼 클릭시
$(".hamburger").click(function(){
    //hide 디스플레이 속성이 noen으로 바뀜
    $(".mobile.hamburger").hide()  //display: none
    $(".mobile.close").show()   //display: block

    $("#mobile_menu").empty(); //empty 하위 태그 초기화

    var nav = $(".nav").clone()  //.nav의 클론을 만든다.

    $("#mobile_menu").append(nav)  //append: 내가 선택한 요소에 하위에 넣는것. ex:모바일 메뉴에 nav를 넣는다.
    $("#mobile_menu").show() //
})

//모바일 햄버거 닫기
$(".close").click(function(){
    $(".mobile.hamburger").show()  //display: none
    $(".mobile.close").hide()   //display: block
    $("#mobile_menu").hide();
})

//브라우저 리사이징 될 때 모바일 메뉴 보이는 버그 방지
$(window).resize(function(){   //브라우저가 리사이징 될때마다 함수가 실행됨.
    var width = $(window).width()   //브라우저의 width를 구해준다.
    if(width >= 767) {
        if ($("#mobile_menu").is(":visible")){
            $(".mobile.hamburger").show()  
            $(".mobile.close").hide()  
            $("#mobile_menu").hide();
        }
    }
})





