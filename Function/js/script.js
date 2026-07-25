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
    document.getElementById('commodity').innerHTML = commodity1.name;
    // document.getElementById('commodity').innerHTML = commodity1.price;
    // document.getElementById('commodity').innerHTML = commodity1.brand;
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
