(() => {
  type Sizes = 'M' | 'S' | 'L';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }
  const createProductToJson = (
    title: string,
    createAt: Date,
    stock: number,
    // optional parameter
    size?: Sizes) : Product => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson("Product 1",new Date(),12,'M');
})()
