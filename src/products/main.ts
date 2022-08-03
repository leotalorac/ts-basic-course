import { addProduct,calcStock,products } from "./product.service";

addProduct({
  title:"Product 1",
  createAt:new Date(),
  stock:12,
  size:'M'
})
addProduct({
  title:"Product 2",
  createAt:new Date(),
  stock:112,
  size:'M'
})
addProduct({
  title:"Product 3",
  createAt:new Date(),
  stock:2,
  size:'S'
})
console.log(products)
console.log(calcStock())
