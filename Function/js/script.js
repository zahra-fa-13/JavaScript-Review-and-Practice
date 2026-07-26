// تمرین 1
function start(HelloFunction) {
    return HelloFunction;
}
console.log(start("Hello Function"));

function start2(HelloJavaScript) {
    console.log(HelloJavaScript);
}
start2("Hello JavaScript");

// تمرین 2
function test(a) { }
alert(("Welcome Zahra"));

// تمرین 3
function test(a) {
    console.log(a);
}
test("Today I learned Functions")

// تمرین 4
function show(showName, showAge, showCity) {
    console.log(showName, showAge, showCity);
}
show("Zahra", 24, "Hashtgerd");

// تمرین 5 
function information(showInformation) {
    console.log(showInformation);
}
information("Name : Zahra, Age : 24, Field : Computer Engineering")

// تمرین 6
function card(commodity1) {
    // روش یک که از object اسم رو بخونه
    // document.getElementById('commodity').innerHTML = commodity1 ;
    // روش 2 که از object اسم رو بخونه 
    // روش 2 حرفه ای تره
    // روشی که چند تا المان" ابجکت رو صدا کردیم
    document.getElementById('commodity').innerHTML =
        'نام : ' + commodity1.name +
        '<br>قیمت : ' + commodity1.price +
        '<br>برند : ' + commodity1.brand;
}
// card('لوسیون, کرم, ریمل, خط چشم')

var product = {
    name: "لوسیون",
    price: 250000,
    brand: "مای"
};

// برای متوجه شدن اینکه کی اسم و صدا کنیم کی مقدار 
function hello(name) {
    console.log(name);
}
hello("Zahra");

function sayAge(age) {
    console.log(age);
}
sayAge(24);

function sayHello() {
    console.log("Hello");
}
sayHello();

// تمرین 7 
function showDog(dog) {
    document.getElementById("animalInfo").innerHTML =
        "Category: " + dog.category +
        "<br>Behavior: " + dog.behavior;
}

function showCat(cat) {
    document.getElementById("animalInfo").innerHTML =
        "Lifespan: " + cat.lifespan +
        "<br>Sense of hearing: " + cat.senseOfHearing;
}

var dog = {
    category: "Mammals",
    behavior: "Intelligent"
};

var cat = {
    lifespan: "12 to 15 years",
    senseOfHearing: "Stronger than a human's"
};

// تمرین 8
function showName(name) {
    document.getElementById("show8").innerHTML =
        "نام : " + info.name;
}
function showAge(name) {
    document.getElementById("show8").innerHTML =
        "سن : " + info.age;
}
function showCity(name) {
    document.getElementById("show8").innerHTML =
        "شهر : " + info.city;
}

var info = {
    name: "زهرا",
    age: 24,
    city: "هشتگرد"
}

// پروژه 1 & 2
var mahsol = {
    name: "غذای خشک کیتن",
    price: 45000,
    quantity: 24
}
function showProduct() {
    document.getElementById("pet").innerHTML =
    "نام : " + mahsol.name +
    "<br>" + " قیمت : " + mahsol.price +
    "<br>" + " تعداد : " + mahsol.quantity +
    "<br>" + " قیمت نهایی : " + final;
}
var final = mahsol.price * mahsol.quantity;
showProduct()

// calculate v2
var num1 = Number(prompt("enter number first number:"));
var num2 = Number(prompt("enter number second number:"));
var operator = prompt("enter operator:");

function calculate() {

    if (operator === "+") {
        document.getElementById("cal").innerHTML =
            "جمع : " + (num1 + num2);
    } else if (operator === "-") {
        document.getElementById("cal").innerHTML =
            "تفریق : " + (num1 - num2);
    } else if (operator === "*") {
        document.getElementById("cal").innerHTML =
            "ضرب : " + (num1 * num2);
    } else if (operator === "/") {
        document.getElementById("cal").innerHTML =
            "تقسیم : " + (num1 / num2);
    } else if (operator === "%") {
        document.getElementById("cal").innerHTML =
            "باقی مانده  : " + (num1 % num2);
    } else if (operator === "**") {
        document.getElementById("cal").innerHTML =
            "توان : " + (num1 ** num2);
    } else {
        document.getElementById("cal").innerHTML =
            "عملگر نامعتبر است.";
    }
}
calculate()
console.log(num1);
console.log(num2);
console.log(operator);

// پروژه فروشگاه
var productُStore = {
    name: "گل رز",
    price: 200000,
    count: 5
};

// فقط کار این تابع اینه که تعداد محصول رو نمایش بده
function store() {
    // این شرط برای اینه که اگر محصول از اول ارا صفرر بود ناموجود بودن اعلام بشه
    if (productُStore.count == 0) {
        document.getElementById("count").innerHTML =
            "تعداد محصول : " + productُStore.count +
            "<br>" + "<br>" +
            "❌ این محصول ناموجود است."
    } 
    // این بخش هم که بیشتر از صفر باشه اجرا میشه
    else {
        document.getElementById("count").innerHTML =
            "تعداد محصول : " + productُStore.count;
    }
}
store()

// کار این تابع میشه گفت که مسئول خرید کردنه
function addToBasket() {
    if (productُStore.count >= 1) {
        // تو اول اینجوری زده بودی
        // productُStore.count - 1 ;
        // درستش اینه
        productُStore.count = productُStore.count - 1;
        // پایینی کوتاه تر شده ی بالاییه 
        // productStore.count--;
        store();
    }
    if (productُStore.count == 0) {
        document.getElementById("count").innerHTML =
            "تعداد محصول : " + productُStore.count +
            "<br>" + "<br>" +
            "❌ این محصول ناموجود است."
    }
}