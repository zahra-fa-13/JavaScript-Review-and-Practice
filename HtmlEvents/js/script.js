// تمرین 1
// (onclick) - تغییر متن
function changingText() {
    document.getElementById("btn1").innerText =
        " من هر روز در حال پیشرفت هستم. 🚀"
}

// تمرین 2
// (onclick) - تغییر رنگ
// لاین پایین برای اینه که رنگ بصورت رفت و برگشتی تغییر کنه
// این تابع برای زمانیه که یک بار رنگ عوض شود 
function changingColorP() {
    // getElementsByClassName یک لیست از عناصر برمی‌گرداند
    // پسسسسسسسسس
    // [0] رو استفاده میکنیم تا به اولین کلاس  دسترسی داشته باشیم
    document.getElementsByClassName("p1")[0].style.color = "red";
}
// این تابع برای زمانیه که چندبار تغییر رنگ بخواهیم
var colorChange = false;

function changingColorP() {

    if (colorChange === false) {
        document.getElementsByClassName("p1")[0].style.color = "red";
        colorChange = true;
    } else {
        document.getElementsByClassName("p1")[0].style.color = "blueviolet";
        colorChange = false;
    }

}

// تمرین 3 & 4
function mouse1() {
    document.getElementById("text").innerText =
     "این یک سگ بامزه است 🐶";
}
function mouse2() {
    document.getElementById("text").innerHTML = "";
}

// تمرین  5
function onChange() {
    console.log("سلام زهرا");
}