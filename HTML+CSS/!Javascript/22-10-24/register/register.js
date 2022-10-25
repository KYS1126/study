const userid = document.querySelector('#userid');
const  pwd1 = document.querySelector('#pwd1');
const  pwd2 = document.querySelector('#pwd2');
const  level = document.querySelector('#level');
const  fullname = document.querySelector('#fullname');
const  email = document.querySelector('#email');
const  tel = document.querySelector('#tel');
const  submitButton = document.querySelector('#submit_button');

submitButton.addEventListener('click', function(e) {
    //1.아이디: 공백여부 / 중복여부
    const idConf = idConfirm()

    //2.비밀번호: 공백여부 / 특문,문자,숫자 포함 8~15자리
    const pwd1Conf = pwd1Confirm()

    //3.비밀번호 확인: 공백여부 / 비밀번호와 같은지 다른지
    const pwd2Conf = pwd2Confirm()

    //4.이름: 공백여부
    const fullnameConf = fullnameConfirm()

    //5.메일주소: 공백여부 / 메일 형식에 맞는지(test@text.com)
    const emailConf = emailConfirm()

    //6.연락처(필수아님): 연락처 형식에 맞는지(010-0101-1010) 
    const telConf = telConfirm()

    if(idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf) {
        document.signup.submit();
    }


    //다른방법

    // let chkArray = [idConfirm(),pwd1Confirm(),pwd2Confirm(),fullnameConfirm(),emailConfirm(),telConfirm()]
    // let chkFlag = true
    // for (const chk of chkArray) {
    //     if (!chk) { //함수의 리턴값이 false 일때
    //         chkFlag = false
    //     }
    // }

    // if (chkFlag) {
    //     document.signup.submit();
    // }

});

function idConfirm() {
    //id를 가져옴.
    const mustId = document.querySelector(".must_id")
    const overlap = document.querySelector(".overlap")
    //텍스트가 남아있는걸 방지하기 위해
    //초기화 한다
    mustId.style.display = "none"
    overlap.style.display = "none"
    //null, undefined, "", 0 은 false 이다!!!!!
    //userid가 공백이라면
    //유저 아이디가 공백이면 "" 빈문자열이 들어올껀데. userid가 빈문자열이 됐을때
    //!이걸로 뒤집어줘서 트루로 만들어줌, 트루면 if문이 실행된다.
    //결론은 빈문자열일때 if문이 실행된다.
    //if (userid.value === "") 이것도 가능
    if (!userid.value.replace(/ |0/g,"")) { //넓은 공백이나 0이 들어오면 ""으로 바꿔준다.
        mustId.style.display = "block"
        return false
    }   else { //중복 아이디 체크
        if (!idCheck(userid.value.replace(/ |0/g,""))) { //지금 아이디 체크하는 곳은 true로 넘겨준다.아이디가 중복이라면 실행한다.
            overlap.style.display = "block"
            return false
        }
    }

    return true   //위에 걸리지 않고 전부 통과하면 트루값을 리턴해준다.
}
function pwd1Confirm() {
    const mustpwd1 = document.querySelector(".must_pwd1")
    const regpwd = document.querySelector(".reg_pwd")

    mustpwd1.style.display = "none"
    regpwd.style.display = "none"
    
    //pwd1 빈문자열, 공백이라면 실행한다.
    if(!pwd1.value.replace(/ |0/g,"")){
        pwd1.style.display = "block"
        return false
    }   else {  //공백이 아니라면~
        if (!pwdCheck(pwd1.value.replace(/ |0/g,""))) { //정규표현식에 맞지 않는다면 false를 줄껀데. 반대로 돌리면 트루니까 실행함
            regpwd.style.display = "block"
            return false
        }
    }

    return true
}


function pwd2Confirm() {
    const mustpwd2 = document.querySelector(".must_pwd2")
    const same = document.querySelector(".same")

    mustpwd2.style.display = "none";
    same.style.display = "none";

    if (!pwd2.value) {
        mustpwd2.style.display = "block"
        return false
    } else {
        if (pwd1.value.replace(/ |0/g,"") && pwd2.value.replace(/ |0/g,"")) { //두 패스워드 값이 있는지 확인
            if (pwd1.value.replace(/ |0/g,"") !== pwd2.value.replace(/ |0/g,"")) {  //두 패스워드가 같지 않다면
                same.style.display = "block"
                return false
            }
        }
    }

    return true
}
function fullnameConfirm() {
    const mustFullname = document.querySelector(".must_fullname")
    mustFullname.style.display = "none";

    if (!fullname.value.replace(/ |0/g,"")) {
        mustFullname.style.display = "block"
        return false
    }

    return true
}
function emailConfirm() {
    const mustEmail = document.querySelector(".must_email")
    const regEmail = document.querySelector(".reg_email")

    mustEmail.style.display = "none"
    regEmail.style.display = "none"

    if (!email.value.replace(/ |0/g,"")) {
        mustEmail.style.display = "block"
        return false
    }   else {
        if (emailCheck(email.value.replace(/ |0/g,""))) {
            regEmail.style.display = "block"
            return false;
        }
    }

    return true
}

function telConfirm() {
    const regTel = document.querySelector(".reg_tel")
    regTel.style.display = "none"

    //전화번호가 있고 정규식 체크에 통과하지 못했을때
    if (telCheck(tel.value.replace(/ |0/g,"")) && tel.value.replace(/ |0/g,"")) {
        regTel.style.display = "block"
        return false
    }

    return true
}

//중복 아이디 체크
function idCheck(id) {
    return true;
}

//비밀번호 정규식 체크
function pwdCheck(pwd) {
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd)
}

function telCheck(tel){
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
}

function emailCheck() {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
}



