// Object property shorthand

const name = 'Tyler'
const age = 23

const user = {
    name,
    age,
    location: 'Los Gatos'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const { label, price, stock } = product

console.log(label)
console.log(price)