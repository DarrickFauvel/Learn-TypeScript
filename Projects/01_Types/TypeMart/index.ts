import products from "./products"

let shipping: number
let taxPercent: number
let taxTotal: number
let total: number
const shippingAddress: string = "157 Broadway, New York, NY"
// const shippingAddress: string = '1600 Pennsylvania Road, Washington, DC'

const productName: string = "fanny pack"
// const productName: string = 'tote bag'

const product = products.filter((item) => {
  if (item.name === productName) {
    return item
  }
})[0]

if (product.preOrder === true) {
  console.log(`We'll send you a message when '${product.name}' is on the way.`)
}

if (Number(product.price) > 25) {
  shipping = 0
  console.log(
    `Yeay! '${product.name}' qualifies for free shipping because its price is over $25.`
  )
} else {
  shipping = 5
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1
} else {
  taxPercent = 0.05
}

taxTotal = Number(product.price) * taxPercent
total = Number(product.price) + taxTotal + shipping

// Receipt
console.log(`***** Receipt *****
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${Number(product.price).toFixed(2)}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`)
