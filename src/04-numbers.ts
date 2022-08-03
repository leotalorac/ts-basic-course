(() => {
  let productPrice = 100;
  productPrice = 102;

  console.log('ProductPrice', productPrice);

  let customerAge:number = 20;
  // customerAge = customerAge + '1'; error 201
  customerAge = customerAge + 1;
  console.log("customerAge",customerAge);

  let productInStock: number;
  productInStock =20;
  // Is need to asssing a value to use the variable
  console.log('productInStock',productInStock);

  if(productInStock > 10){
    console.log('is grader');
  }
  let discount = parseInt('12');
  console.log('discount',discount);

  if(discount <100){
    console.log('apply');
  }else{
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex',hex);
  let bin = 0b1010;
  // bin = 0b123123 not possible
  console.log(bin)
  // Not use
  const myNumber: Number = 10;
})();
