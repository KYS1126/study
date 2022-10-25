const userid = document.querySelector('userid');
const pwd1 = document.querySelector('pwd1');
const pwd2 = document.querySelector('pwd2');
const level = document.querySelector('level');
const fullname = document.querySelector('fullname');
const email = document.querySelector('email');
const tel = document.querySelector('tel');
const submitButton = document.querySelector('submit_Button');


submitButton.addEventListener('click', function (e){
    idConfirm()

})



//아이디
const must_id = document.querySelector("must_id")
const overlap = document.querySelector("overlap")

must_id.style.display = "none"
overlap.style.display = "none"

 //null, undefined, "", 0 은 false 이다!!!!!
function idConfirm(e) {
    if (!userid.value) {
        must_id.style.display = "block"
        return false
    } else {
        if (idCheck(userid.value)) {
            overlap.style.display = "block"
        }
    }
}

//비밀번호
const must_pwd1 = document.querySelector('must_pwd1')
const reg_pwd = document.querySelector('reg_pwd')

must_pwd1.style.display = "none"
reg_pwd.style.display = "none"

//비밀번호, 공백인지, 조건에 맞는지

function pwd1Confirm (e) {
    if () {

    }
}










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
