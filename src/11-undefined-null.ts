(() => {
  // not possible
  // let myNumber:number = undefined;
  // let myString:string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 213;

  const hi = (name: string | null) => {
    let hello = 'Hola ';
    if(name){
      console.log(hello + name);
    }else{
      console.log(hello +'nobody');
    }
    // check if it exist
    console.log(hello + (name?.toLowerCase() || 'nobody'))
  }
  hi("Luis");
  hi(null);

})()
