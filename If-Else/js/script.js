// تمرین 1
var age = 24;
if (age > 18) {
    console.log("You can vote");
}

// تمرین 2
var score = 17;
if (score >= 10) {
    console.log("pass");
} else {
    console.log("fail");
}

// تمرین 3
var battery = 15;
battery < 20 ? console.log("low battery") : console.log("gooood");

// تمرین 4
var password = "12345";
if (password = 12345) {
    console.log("Login seccessful");
} else {
    console.log("Wrong password");
}

// تمرین 5
var money = 800;
if (money > 1000) {
    console.log("Purchase completed");
} else {
    console.log("Not enough money");
}

// تمرین 6
// var score = prompt("grade?");
var score = 18;
if (18 < score & score < 20) {
    alert("Excellent")
} else if (15 < score & score < 17) {
    alert("Good")
} else if (10 < score & score < 14) {
    alert("Average")
} else {
    alert("Failed")
}

// تمرین 7
var temperature = prompt("temperature?");
if (temperature < 0) {
    alert("Freezing");
} else if (temperature > 0 & temperature < 15) {
    alert("Cold");
} else if (temperature > 16 & temperature < 25) {
    alert("Normal");
} else if (temperature > 25) {
    alert("Hot");
}

// تمرین 8
var age = 17;
var resule = age >= 18 ? "Adult" : "Child";
console.log(resule);
// یا به روش زیر و یهویی بدون نعریف متغیر
console.log(age >= 18 ? "Adult" : "Child");

// تمرین 9
var login = true;
if (login) {
    console.log("Welcome");
} else {
    console.log("Please Login");
}

// تمرین 10
var day = 3;
switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        break;
}

// تمرین 11
var color = "red";
switch (color) {
    case red:
        console.log("Stop");
        break;
    case yellow:
        console.log("Wait");
        break;
    case green:
        console.log("Go");
        break;
    default:
        console.log("Invalid Color");
        break;
}

// تمرین 12
var client = prompt(" How old are you ? ");
if (client > 18) {
    alert("Welcome");
} else {
    alert("Sorry");
}

// تمرین 13
var favNumber = prompt("please enter number");
// روش خوذت
if (favNumber % 2) {
    // فرد
    console.log("you enter odd number");
} else {
    console.log("you enter even number");
}

// روش 2
if (favNumber % 2 == 0) {
    console.log("you enter even number");
} else {
    console.log("you enter odd number");
}

// روش 3
if (favNumber % 2 != 0) {
    console.log("you enter odd number");
} else {
    console.log("you enter even number");
}

// تمرین 14
var login = false;

if (!login) {
    console.log(!login);

    console.log("Please Login");
} else {
    console.log("!!!!!!!!!!!");
}

// تمرین 15
var wifi = true;

if (!wifi) {
    console.log("No Internet");
} else {
    console.log("Connected");
}

// پروژه 1
var name = prompt("Enter the product name");
// بااااید اینجور جاها از == یا === استفاده کنی که نتیجه و خروجی درستی داشته باشی

// هر وقت تو if از = خواستی استفاده کنی
// "دارم مقایسه می‌کنم یا دارم مقدار می‌دهم؟"
// اگر می‌خواهی مقدار داخل متغیر بریزی → =
// اگر می‌خواهی دو چیز را با هم مقایسه کنی → == یا ===

// من اولش اینجوری زده بودم که اشتباه بود
// if (name = "لوسیون") {
if (name === "لوسیون") {
    console.log("این کالا موجود است");
} else {
    console.log("این کالا ناموجود است");
}

// = == === بهتر یادگیری 
var age = 24;
// اینجا age تغییر کرد و 18 شد چون فقط از = استفاده کردیم و مقایسه ای نبوده بخاطر همین چاپ میشه
if (age = 18) {
    console.log("Hello");
}

// = == === بهتر یادگیری 
var x = 5;
// این چاپ نمیشه چون 0 false محسوب میشه
if (x = 0) {
    console.log("A");
}
if (x = 10) {
    console.log("B");
}
// چون مقدار x کلا تغییر کرد و 10 شده پس اینم اجرا میشه
if (x == 10) {
    console.log("C");
}

// پروژه 2
var jacket = 14580000;
if (jacket > 3000000) {
    console.log("ارسال رایگان");
}else{
     console.log("هزینه ارسال: 120 هزار تومان");
}

// پروژه 3
var username = prompt("please enter usearname:")
var pass = prompt("please enter pass:")

if (username == "Zahra" & pass == 1234) {
    console.log("Welcome Zahra");
} else {
    console.log("Username or Password is incorrect");
}

// پروژه4
// Calculator V1
// این Number که گذاشتیم برای این هستش که عدد بگیره نه استرینگ و عمل جمع هم درست انجام بشه 
var num1 = Number(prompt("choose number 1 :"));
var num2 = Number(prompt("choose number 2 :"));
var operator = prompt("choose Operator : ");

switch (operator) {
    case "+":
        console.log("number 1 : " + num1 + " , " + "number 2 : " + num2 + " = " + (num1 + num2));
        break;
    case "-":
        console.log("number 1 : " + num1 + " , " + "number 2 : " + num2 + " = " + (num1 - num2));
        break;
    case "*":
        console.log("number 1 : " + num1 + " , " + "number 2 : " + num2 + " = " + (num1 * num2));
        break;
    case "/":
        console.log("number 1 : " + num1 + " , " + "number 2 : " + num2 + " = " + (num1 / num2));
        break;
    default:
        console.log("you should choose another operator");
        break;
}