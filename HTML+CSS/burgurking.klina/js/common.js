// 1.pc버전 서브메뉴 관련
const menu = document.querySelector('.menu__main') //전체 메뉴
const subMenus = document.querySelectorAll('.list__drop') //하위 메뉴
const panel = document.querySelector('.header__panel') //하위 메뉴 나올때 나오는 판넬
const header = document.querySelector('.header') //전체 헤더

//하위 메뉴 보여주기
menu.addEventListener('mouseover', function(){
    panel.style.display = 'block';
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'block';
    })
})

//하위 메뉴 숨김
header.addEventListener('mouseout', function(){
    panel.style.display = 'none';
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'none';
    })
})
panel.addEventListener('mouseout', function(){

})


// 2.모바일 버전 메뉴 보이기, 숨기기
const Mhamburger = document.querySelector('.mobile.hamburger') //햄버거
const Mclose = document.querySelector('.mobile.close') //닫기 버튼
const Mnav = document.querySelector('.header__Mnav') //모바일 메뉴 전체

Mhamburger.addEventListener('click', function(){
    Mnav.style.display = 'block'
})

Mclose.addEventListener('click', function(){
    Mnav.style.display = 'none'
})


// 3.모바일 하위 메뉴 보이기 숨기기 

function showHide(e) {  //e -> 이벤트가 일어날때 이벤트 정보가 들어감
    const MListDrop = e.chil[2] //MListDrop,내가 선택한 하위 메뉴를 가져오는것.
    // const displayAttr = MListDrop.style.display; //이것도 원래 됨
    const displayAttr = window.getComputedStyle(MListDrop).display

    if(displayAttr === 'none') {
        MListDrop.style.display = 'block'
    } else { 
        MListDrop.style.display = 'nene'
    }
}

// 4.width 가767px 이상일때 모바일 메뉴 보임 방지

window.addEventListener('resize', function(){ //resize = 사이트가 바뀔때마다 이벤트를 준다.
    let winWidth = this.window.innerHeight;  //innerHeight - 윈도우 창 크기 구하기
    if (winWidth >= 767) {
        Mnav.style.display = 'none'
    }


    
})