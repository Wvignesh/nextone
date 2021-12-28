// bind() :
// The official docs say: The bind() method creates a new function that, when called,
//  has its this keyword set to the provided value. 
//  (It actually talks about even more stuff, but we’ll leave that for another time :) )
// This is extremely powerful. 
// It let’s us explicitly define the value of this when calling a function. Let’s look at code


var prime = {

    firstname: "vicky",
    lastname: " varner",
    
    getEnname : function(){
    
      var fullname= this.firstname + ' ' + this.lastname ;
      return fullname;
    }
    };
     
    var primeonName = function(){
    
    console.log (this.getEnname() + " i love you");
    };
    
    var logprime =  primeonName.bind(prime);
    
    logprime();


// call(), apply():

// The official docs for call() say: The call() method calls a function with a given this value and arguments
//  provided individually.What that means, is that we can call any function, and explicitly specify
//   what this should reference within the calling function. Really similar to the bind() method! 
//   This can definitely save us from writing hacky code (even though we are all still hackerzzz).
// The main differences between bind() and call() is that the call() method:
// Accepts additional parameters as wellExecutes the function it was called upon right away.
// The call() method does not make a copy of the function it is being called on.
// call() and apply() serve the exact same purpose.
// The only difference between how they work is that call() expects all parameters to be passed in individually,
//  whereas apply() expects an array of all of our parameters.




  var venom = {
    firstname: 'vicky',
    lastname: ' vignesh ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
  };
  
  var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
  };
  
  pokemonName.call(venom,'juice', 'coffee'); //  vicky  vignesh  loves juice and coffee
  pokemonName.apply(venom,['nayan', 'trisha']); //  vicky  vignesh  loves nayan and trisha


  
// Inheriting "methods":

// JavaScript does not have "methods" in the form that class-based languages define them.
//  In JavaScript, any function can be added to an object in the form of a property.
//   An inherited function acts just as any other property, including property 
    
// When an inherited function is executed, the value of this points to the inheriting object, 
// not to the prototype object where the function is an own property.


var o = {
    a: 2,
    m: function() {
      return this.a + 1;
    }
  };
  
  console.log(o.m()); // 3
  // When calling o.m in this case, 'this' refers to o
  
  var p = Object.create(o);
  // p is an object that inherits from o
  
  p.a = 4; // creates a property 'a' on p
  console.log(p.m()); // 5
  // when p.m is called, 'this' refers to p.
  // So when p inherits the function m of o,
  // 'this.a' means p.a, the property 'a' of p
  

  

  function doSomething(){}
console.log( doSomething.prototype );
//  It does not matter how you declare the function; a
//  function in JavaScript will always have a default
//  prototype property — with one exception: an arrow
//  function doesn't have a default prototype property:
const doSomethingFromArrowFunction = () => {};
console.log( doSomethingFromArrowFunction.prototype );


// As seen above, doSomething() has a default prototype property,
//  as demonstrated by the console. After running this code,
//   the console should have displayed an object that looks similar to this