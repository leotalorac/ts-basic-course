(()=>{
  let myUserId: string|number;
  myUserId = 123;
  myUserId = '123';

  const greeting = (myText:string|number) =>{
    if(typeof myText === "string"){
      console.log(myText.toLowerCase());
    }else{
      console.log(myText.toFixed(3));
    }

  }
  greeting("ASDAS");
  greeting(12312.12312312);
})()
