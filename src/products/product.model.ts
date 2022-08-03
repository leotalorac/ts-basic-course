export type Sizes = 'M' | 'S' | 'L';
export type Product = {
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
}
