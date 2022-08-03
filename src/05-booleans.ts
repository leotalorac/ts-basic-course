(()=>{
  let isEnable = true;
  // isEnable = 'asd'; not possible
  isEnable = false

  let isNew: boolean = true;

  console.log('isNew',isNew);
  isNew = false;
  console.log('isNew',isNew);

  const random = Math.random();
  console.log('random',random);
  isNew = random >=0.5;
  console.log('isNew',isNew);
})()
