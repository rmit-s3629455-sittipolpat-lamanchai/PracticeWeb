let greeting = 'Howdy ';
let name = 'Molly';
let message = ', please check your order:';
let welcome = greeting + name + message;

let sign = 'Montague House';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

let el = document.getElementById('greeting').textContent = welcome;

let elSign = document.getElementById('userSign').textContent = sign;

let elTiles = document.getElementById('tiles').textContent = tiles;

let elSubTotal = document.getElementById('subTotal').textContent = `$${subTotal}`;

let elShipping = document.getElementById('shipping').textContent = `$${shipping}`;

let elGrandTotal = document.getElementById('grandTotal').textContent = `$${grandTotal}`;