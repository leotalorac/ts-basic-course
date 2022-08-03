(() => {
  const prices = [1, 2, 2123, 12, 12, 31, 'as', true];
  //  possible on multiple
  // const prices: (string | number | boolean)[]
  prices.push("asd");
  prices.push(true);
  prices.push(21);
  // not possible
  // prices.push({});

  // not infered types
  let products: (number | string | boolean
    |
    Object //allow everything and {}
  )[] = [12, 'qweqw'];
  products.push(true)
  products.push(12)
  // not possible
  products.push({})

  let numbers = [1,12,31,123,123,123,12,12];
  // know the intern type
  numbers.map(item =>item*2);
})();
