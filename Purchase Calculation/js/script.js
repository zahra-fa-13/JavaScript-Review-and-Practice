let price = 23000;
let quantity = 4;

let tour = price * quantity;
console.log(tour);

let price2 = document.getElementById('price');
let quantity2 = document.getElementById('quantity')

let tour2 = Number(price2.textContent) * Number(quantity2.textContent) ;
console.log(tour2);
