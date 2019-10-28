// const ArrowFunction = () => {
//     console.log(this);
// }

// ArrowFunction();

// const myObject = {
//     myMethod: () => {
//       console.log(this);
//     }
//   };

//   myObject.myMethod() // this === window or global object

//   const myMethod = myObject.myMethod;
//   myMethod() // this === window or global object


  const myObject = {
    myArrowFunction: null,
    myMethod: function() {
      this.myArrowFunction = () => { console.log(this) };
    }
  };

  myObject.myMethod() // this === myObject

  myObject.myArrowFunction() // this === myObject
  
  const myArrowFunction = myObject.myArrowFunction;  
  myArrowFunction() // this === myObject