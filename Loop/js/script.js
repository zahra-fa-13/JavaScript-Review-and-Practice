// // تمرین 1
// // اعداد 0 تا 10
// var number = 0;

// while (number <= 10) {
//     console.log(number);
//     number++;
// }

// // تمرین 2 
// // اعداد 10 تا 0
// var number2 = 10;

// while (number2) {
//     console.log(number2);
//     number2--;
// }

// // تمرین 3 
// // اعداد زوج 0 تا 20
// for (let numberEven = 0; numberEven <= 20 ; numberEven+=2) {
//     console.log(numberEven);
// }

// // تمرین 4 
// // اعداد فرد 0 تا 20
// for (let numberEven = 1; numberEven <= 20 ; numberEven+=2) {
//     console.log(numberEven);
// }

// // تمرین 5
// // اعداد 5 تا 50 که مضرب 5 باشن
// for (let MultipleOF5 = 5; MultipleOF5 <= 50; MultipleOF5 += 5) {
// console.log(MultipleOF5);
// }

// // تمرین 6 
// for (let evenOdd = 0; evenOdd <= 30; evenOdd++) {
//     console.log(evenOdd);

//     if (evenOdd % 2==0) {
//         console.log("زوج است");
//     } else {
//         console.log("فرد است");
//     }
// }

// // تمرین 7
// // FizzBuzz 
// for (let fizz = 1; fizz <=100; fizz++) {
//     console.log(fizz);
//     if (fizz % 3 ==0) {
//         console.log("fiiiiiiiiiiizz");
//     }
// }

// // تمرین 8 
// // مجموع اعداد ۱ تا ۱۰ را حساب کردم
// let total = 0;

// for (let sum = 1; sum <= 10; sum++) {
//     total = total + sum;
//     // اگر اینجا log بگیریم همه جمع هاارو نشون میده تا به 55 برسه اگر فقط جواب نهایی رو بخوایم بیرون باید ببریمش
//     // console.log(total);
// }
// console.log(total);

// // تمرین 9
// // مجموع اعداد زوج بین ۱ تا ۱۰۰ را حساب کنیم
// var sumEven = 0;

// for (let enenSum = 1; enenSum <= 100; enenSum++) {
//     if (enenSum % 2 == 0) {
//         sumEven = sumEven + enenSum
//         // نوشتار کوتاه تر اما تو بالایی رو نوشتی
//         // sumEven += enenSum;
//     }
// }
// console.log(sumEven);

// // تمرین 10
// // میانگین نمرات و جمع نمرات با آرایه 
// var scores = [18, 20, 15, 17, 19];
// var sumScore = 0;
// // تو خط پایین <= نار و < بذار چون شمارش از 0 شروع میشه
// for (let i = 0; i < scores.length; i++) {
//     // جمعشون
//     sumScore += scores[i];
// }
// // میانگین
// var average = sumScore / scores.length;

// console.log(sumScore);
// console.log(average);

// // تمرین 11
// // رنگ هارو چاپ کن
// var colors = [
//     "red",
//     "blue",
//     "green",
//     "yellow"
// ];
// for (let rang = 0; rang < colors.length; rang++) {
//     console.log(colors[rang]);
    
// }

// تمرین 12
// نکتههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه
// با چیزایی که فعلا یاد گرفتی آبجکت رو نمیتونی باحلقه ترکیب کنی 
// باید موارد زیر رو بلد باشی تا بشه : 
// for...in
// Object.keys()
// Object.values()
// پس زیریه خطاست فقط پاک نمیکنی که یادت بمونه
// var product = {
//     name: "Laptop",
//     price: 35000,
//     brand: "Asus",
//     count: 5
// };
// for (let i = 0; i < product.length; i++) {
//     console.log(i(product.name, product.price, product.brand, product.count));
// }

// تمرین 13
// دکمه وقتی کلیک شد اعداد 1 تا 20 نمایش داده بشه
var clickNumber = 0;

while (clickNumber <= 20) {
    console.log(clickNumber);
    clickNumber++;
}