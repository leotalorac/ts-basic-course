import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (product: Product): void => {
  products.push(product);
}

export const calcStock = (): number => {
  return products.reduce((accumulator, item) => {
    return accumulator += item.stock
  }, 0)
}
