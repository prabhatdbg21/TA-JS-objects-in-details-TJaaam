/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let obj = {} ;
  obj.name = name ;
  obj.age = age ;
  return obj ;
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  greet : function () {
    console.log ("hello")
  }
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let person = Object.create(personStore);
  person.name = name ;
  person.age = age ;
  return person ;
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
/* Without editing the code you've already written, add an `introduce` method to the `personStore` 
object that logs "Hi, my name is [name]". */
// add code here

/*
personStore.prototype.introduce = function (){
  console.log (`Hi, my name is ${naaame}`)
}
*/


// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet = function (){
    console.log ("hello")
  }
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  let person = new PersonConstructor ()
  person.name = name ;
  person.age = age ;
  return person
}

var mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
PersonConstructor.prototype.introduce = function (){
  console.log (`Hi, my name is ${this.name}`)
}


mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor(name) {
    this.name = name ;
  }
  greet(){
    console.log(`hello`)
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

class DeveloperClass extends PersonClass {
  constructor (name) {
    super (name) ;
  }
  introduce(){
    console.log (`Hello World, my name is ${this.name}`)
  }
}

// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = {};
Object.setPrototypeOf ( adminFunctionStore, userFunctionStore)

/*
Create an `adminFactory` function that creates an object with all the same data fields (and default values) 
as objects of the `userFactory` class, but without copying each data field individually.
*/
function adminFactory(name, score) {
  let obj = {};
  Object.setPrototypeOf ( obj, userFactory.call(this , name, score))
  return obj
}


/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
dminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
