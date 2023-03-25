"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "157 Broadway, New York, NY";
// const shippingAddress: string = '1600 Pennsylvania Road, Washington, DC'
var productName = "fanny pack";
// const productName: string = 'tote bag'
var product = products_1.default.filter(function (item) {
    if (item.name === productName) {
        return item;
    }
})[0];
if (product.preOrder === true) {
    console.log("We'll send you a message when '".concat(product.name, "' is on the way."));
}
if (Number(product.price) > 25) {
    shipping = 0;
    console.log("Yeay! '".concat(product.name, "' qualifies for free shipping because its price is over $25."));
}
else {
    shipping = 5;
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
// Receipt
console.log("***** Receipt *****\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(Number(product.price).toFixed(2), "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
