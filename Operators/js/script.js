// عملگر های ریاضی و انتسابی 
// تمرین 1
var num1 = 20;
var num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// تمرین 2
var score = 18;
console.log(score);
console.log(score++);
console.log(++score);
console.log(score);
console.log(score--);
console.log(--score);

// تمرین 3
var money = 100;
// +20%
money = money + (money * 20 / 100);
console.log(money);

// تمرین 4
var age = 24;
age = age + 5;
console.log(age);

// تمرین 5
var price = 450000;
var count = 4;
var result = price * count;
console.log(result);


// Calculator
var number1 = 10;
var number2 = 5;

// عملگر های منطقی و مقایسه ای
// تمرین 1
var num1 = 15;
var num2 = 10;
console.log(num1>num2 , num1<num2 , num1==num2 , num1!=num2 , num1===num2 , num1!==num1);

// تمرین 2 
var number = 20;
var text = "20";
console.log(number == text);
console.log(number === text);

// نمرین 3
var age = 24;
console.log(age > 18);
console.log(age < 30);
console.log(age == 24);
console.log(age === "24");

// تمرین 4
var math = 18;
var english = 19;
console.log(math > 15 && english > 15);
console.log(math > 19 && english > 15);

// تمرین 5
var html = true;
var css = false;
console.log(html || css);
console.log(false || false);
console.log(true || false);
console.log(false || true);

// تمرین 6
var login = true;
console.log(!login);
login = false;
console.log(!login);

// تمرین 7
var student = {
    name: "Zahra",
    age: 24,
    score: 19,
    graguated: true
}
console.log(student.age > 20);
console.log(student.score == 20);
console.log(student.graduated === true);
console.log(typeof(student.graguated));
console.log(student.age > 18 && student.score > 18);
console.log(student.age < 20 || student.score > 18);

// تمرین8
console.log(10 == "10");
console.log(10 === "10");

console.log(true == 1);
console.log(true === 1);

console.log(false == 0);
console.log(false === 0);