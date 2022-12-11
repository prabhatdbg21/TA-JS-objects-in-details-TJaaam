// Pseudoclassical Pattern
function CreateAnimal(location , numberOfLegs) {
    this.location = location ;
    this.numberOfLegs = numberOfLegs ;
}
CreateAnimal.prototype = {
    eat : function (){
        console.log (`I live in ${this.location} and I can eat`)
    },
    changeLocation : function (newLocation){
        this.location = newLocation ;
    },
    summary : function () {
        return `I live in ${this.location} and I have ${this.numberOfLegs} Legs`
    },
}

//Dog
function CreateDog (location , numberOfLegs, name , color){
    CreateAnimal.apply(this , [location , numberOfLegs]);
    this.name = name ;
    this.color = color ;
}

CreateDog.prototype = {
    bark : function () {
        alert (`I am ${this.name} and I can bark 🐶`)
    },
    changeName : function (newName) {
        this.name = newName ;
    },
    changeColor : function (newColor) {
        this.color = newColor ;
    },
    summary : function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    },
}

Object.setPrototypeOf (CreateDog.prototype , CreateAnimal.prototype);

// Cat
function CreateCat (location , numberOfLegs, name , colorOfEyes){
    CreateAnimal.apply(this , [location , numberOfLegs]);
    this.name = name ;
    this.colorOfEyes = colorOfEyes ;
}

CreateCat.prototype = {
    meow : function () {
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName : function (newName) {
        this.name = newName ;
    },
    changeColorOfEyes : function (newColor) {
        this.colorOfEyes = newColor ;
    },
    summary : function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

Object.setPrototypeOf (CreateCat.prototype , CreateAnimal.prototype);




// Class Pattern
class Animal {
    constructor(location , numberOfLegs) {
        this.location = location ;
        this.numberOfLegs = numberOfLegs ;
    }
    eat(){
        console.log (`I live in ${this.location} and I can eat`)
    }
    changeLocation(newLocation){
        this.location = newLocation ;
    }
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} Legs`
    }
}

// Dog
class DogAnimal extends Animal {
    constructor (location , numberOfLegs, name , color){
        super(location , numberOfLegs)
        this.name = name ;
        this.color = color ;
    }
    bark() {
        alert (`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName) {
        this.name = newName ;
    }
    changeColor(newColor) {
        this.color = newColor ;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

// Cat
class CatAnimal extends Animal {
    constructor (location , numberOfLegs, name , colorOfEyes){
        super(location , numberOfLegs)
        this.name = name ;
        this.colorOfEyes = colorOfEyes ;
    }
    meow() {
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    }
    changeName(newName) {
        this.name = newName ;
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor ;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}