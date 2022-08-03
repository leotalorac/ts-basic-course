(()=>{
  type UserID = string|number|boolean;

  let myUserId: UserID;

  // Literal types
  type Sizes = 'M'|'S'|'L';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  // mark error
  // shirtSize = 'asdasdas';

  const greeting = (myUserId:UserID,size:Sizes) =>{
    if(typeof myUserId === "string"){
      console.log(myUserId.toLowerCase() + ' ' +size);
    }
  };
  greeting('Luis','M');
  greeting('Juan','L');
})()
