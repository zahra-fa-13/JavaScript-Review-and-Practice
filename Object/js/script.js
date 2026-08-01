// تمرین 1
// دسترسی به property 
var car = {
    brand: "BMW",
    model: "M4",
    year: 2024,
    color: "Black"
};
console.log(car.brand, car.model, car.year, car.color);

// تمرین 2
// تغییر مقدار
var user = {
    name: "Ali",
    age: 20
};
console.log(user.age = 21, user.name);

// تمرین 3
// (اضافه کردن Property)
var student = {
    name: "Sara",
    major: "Computer"
};
student.grade = 18.75;
console.log(student);

// تمرین 4
// (چک کردن Property با in)
var product = {
    name: "Laptop",
    price: 35000
};
if ("price" in product) {
    console.log("Price exists");
}

// تمرین 5
// (undefined)
var person = {
    name: "Zahra",
    city: "Hashtgerd"
};
if (person.age == undefined) {
    console.log("Age not found");
} else {
    console.log("Age exists");
}

// تمرین 6
// (for...in)
var pet = {
    type: "Dog",
    color: "Brown",
    age: 4
};
for (let key in pet) {
    // فقط مقدار رو نشون میده
    console.log(pet[key]);
    // تمرین 7
    // در این مدل هم کلید هم مقدار
    console.log(key + " : " + pet[key]);
}
// // این پیشرفته ی تمرین 6 و پیشنهاد  vscode
// for (const key in pet) {
//     // این یک بررسی اضافه است که مطمئن می‌شود ویژگی متعلق به خود شیء است و از زنجیره‌ی ارث‌بری (Prototype) نیامده است.
//     if (!Object.hasOwn(pet, key)) continue;

//     const element = pet[key];
//     console.log(element);
// }

// تمرین 8     (پروفایل)
var me = {
    firstName: "Zahra",
    lastName: "Falihi",
    age: 24,
    city: "Hashtgerd",
    job: "Front-end Developer"
};
// لاین بعدی رو برای این گذاشتیم که اگر در پروژه ی اقعی بر اثر کلیک اطلاعات نمایش داده شد قبلی هارو پاک کنه و جدیده رو نمایش بده نه اینکه زیر اطلاعات قبلی جدید هارو اضافه کنه
document.getElementById("resume").innerHTML = "";
for (const key in me) {
    document.getElementById("resume").innerHTML +=
        key + " " + ":" + " " + me[key] + "<br>"
}


// پروژه 1
// فروشگاه : با کلیک روی دکمه ی کارت اطلاعات محصول نمایش داده بشه
var product = {
    name: "Mouse",
    brand: "Logitech",
    price: 1200000,
    count: 8,
    color: "Black"
};

function showProduct() {

    var information = document.getElementById("information");

    information.innerHTML = "";

    for (const key in product) {
        information.innerHTML +=
            key + " : " + product[key] + "<br>";
    }
}

// پروژه 2
// بررسی ورود
var user = {
    username: "zahra",
    password: 123456,
    fullName: "Zahra Falihi"
};

var userName = prompt("Enter username : ");

var passWord = Number(prompt("Enter password : "));
if (userName === user.username && passWord === user.password) {
    alert("Welcome " + user.fullName);
} else {
    alert("Username or Password is incorrect")
}

// پروژه 3 
// (پروفایل حرفه‌ای)
var profile = {
    firstName: "Zahra",
    lastName: "Falihi",
    age: 24,
    city: "Hashtgerd",
    email: "falihizahra13@gmail.com",
    phone: +989120384261,
    skills: "Html , Css , Sass , javascript",
    goal: "react",
    favoriteColor: "blue",
    job: "Front-end Developer"
};

for (const key in profile) {
    document.getElementById("profile").innerHTML +=
        key + " " + ":" + " " + profile[key] + "<br>"
}