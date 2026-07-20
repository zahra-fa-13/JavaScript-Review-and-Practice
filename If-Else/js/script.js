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
var score = prompt("grade?");
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
temperature < 0 ? alert("Freezing") :
    temperature > 0 & temperature < 15 ? alert("Cold") :
        temperature > 16 & temperature < 25 ? alert("Normal") :
            temperature > 25 ? alert("Hot") : alert("be careful");