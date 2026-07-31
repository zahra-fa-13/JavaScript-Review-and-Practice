// // تمرین 1
// // دسترسی به property 
// var car = {
//     brand: "BMW",
//     model: "M4",
//     year: 2024,
//     color: "Black"
// };
// console.log(car.brand, car.model, car.year, car.color);

// // تمرین 2
// // تغییر مقدار
// var user = {
//     name: "Ali",
//     age: 20
// };
// console.log(user.age = 21, user.name);

// // تمرین 3
// // (اضافه کردن Property)
// var student = {
//     name: "Sara",
//     major: "Computer"
// };
// student.grade = 18.75;
// console.log(student);

// // تمرین 4
// // (چک کردن Property با in)
// var product = {
//     name: "Laptop",
//     price: 35000
// };
// if ("price" in product) {
//     console.log("Price exists");
// }

// // تمرین 5
// // (undefined)
// var person = {
//     name: "Zahra",
//     city: "Hashtgerd"
// };
// if (person.age == undefined) {
//     console.log("Age not found");
// } else {
//     console.log("Age exists");
// }

// تمرین 6
// (for...in)
var pet = {
    type: "Dog",
    color: "Brown",
    age: 4
};
for (let key in pet) {
    console.log(pet[key]);
}
for (let property in pet) {
   console.log(pet[property].type, pet.color, pet.age);
   
}
// // این پیشرفته ی بالاییه و پیشنهاد  vscode
// for (const key in pet) {
//     // این یک بررسی اضافه است که مطمئن می‌شود ویژگی متعلق به خود شیء است و از زنجیره‌ی ارث‌بری (Prototype) نیامده است.
//     if (!Object.hasOwn(pet, key)) continue;

//     const element = pet[key];
//     console.log(element);
// }

