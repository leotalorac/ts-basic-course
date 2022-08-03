(()=>{
  let myDynamicType:any;
  myDynamicType = "asdasd";
  myDynamicType = 123;
  myDynamicType = true;
  myDynamicType = {};

  myDynamicType = 'Hello';
  console.log((myDynamicType as string).length);

  const rta = (myDynamicType as string);
  console.log(rta.toLowerCase());
  myDynamicType = 12;
  const nu = (<number>myDynamicType)
  console.log(nu.toFixed());

})()
