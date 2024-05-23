let displayName = "ธรรมนูญ​ วันชะเอม"; //ชื่อจริง นามสกุล
let studentNo = "66230125"; //รหัสนักศึกษา
let nickName = "อิฐ"; //ชื่อเล่น
let gender  = "ชาย"; //เพศสภาพ
let birthDate = "27 กันยายน 1997"

init();

function init(){
    let elAppBar = document.getElementById('app-bar');
    elAppBar.innerHTML = '<i class="fa-brands fa-web-awesome me-2"></i>' + displayName + ` (${studentNo})`;

    let elDisplayName = document.getElementById('display-name');
    elDisplayName.innerHTML = displayName;

    let elNickName = document.getElementById('nick-name');
    elNickName.innerHTML = 'ชื่อเล่น: ' + nickName;

    let elGender = document.getElementById('gender');
    elGender.innerHTML = 'เพศสภาพ: ' + gender;

    let elBirthDate = document.getElementById('birth-date');
    elBirthDate.innerHTML = 'วันเกิด: ' + birthDate;
}