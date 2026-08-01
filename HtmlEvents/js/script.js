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

// تمرین 6
// event.target      // عنصری که رویداد روی آن اتفاق افتاده
// event.target.value // مقدار input
// event.key         // کلیدی که کاربر فشار داده (مثل "a" یا "Enter")
function onKeyDown(event) {
    console.log(event);

    document.getElementById("pInput").innerHTML =
        event.target.value
}

// تمرین 7
function onInput(event) {

    var score = Number(event.target.value);
    var result = document.getElementById("result");

    // این خط میاد میگه اگر غیر از عدد وارد کرد و  NaN  شد بیاد پیام بده به کاربر 
    if (Number.isNaN(score)) {
        result.innerHTML = "⚠️ لطفاً فقط عدد وارد کنید.";
    } else if (score >= 10) {
        result.innerHTML = "قبول شدی ✅";
    } else {
        result.innerHTML = "مردود شدی ❌";
    }

}

// تمرین 8
// (onmouseover + onmouseout)
function offer() {
    document.getElementById("offerP").innerText =
        "✨ تخفیف ویژه"
}
function offerOut() {
    document.getElementById("offerP").innerText =
        ""
}

// تمرین 9
// (onclick + Object + if)
var product = {
    name: "Keyboard",
    price: 2500000,
    brand: "Logitech",
    count: 3,
    color: "Black"
};

function showProduct() {
    var information = document.getElementById("information");

    information.innerHTML = "";
    if (product.count > 0) {
        for (const key in product) {
            information.innerHTML +=
                key + " : " + product[key] + "<br>";
        }

        information.innerHTML += "🟢 موجود";
    } else {
        information.innerHTML =
            "🔴 ناموجود";
    }
}