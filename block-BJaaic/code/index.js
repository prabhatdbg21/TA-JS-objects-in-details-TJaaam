let animalMethods = {
    eat : function (){
        console.log (`I live in ${this.location} and I can eat`)
    },
    changeLocation : function (newLocation){
        this.location = newLocation ;
    },
    summary : function () {
        return `I live in ${this.location} and I have ${this.numberOfLegs} Legs`
    }
}

function createAnimal (location , numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location ;
    animal.numberOfLegs = numberOfLegs ;
    return animal;
}

let animalMethodsDog = {
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
    }
}

Object.setPrototypeOf(animalMethodsDog , animalMethods)

function createAnimalDog (location , numberOfLegs, name , color){
    let animal = Object.create(animalMethodsDog);
    animal.location = location ;
    animal.numberOfLegs = numberOfLegs ;
    animal.name = name ;
    animal.color = color ;
    return animal;
}

let animalMethodsCat = {
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

Object.setPrototypeOf(animalMethodsCat , animalMethods)

function createAnimalCat (location , numberOfLegs, name , colorOfEyes){
    let animal = Object.create(animalMethodsCat);
    animal.location = location ;
    animal.numberOfLegs = numberOfLegs ;
    animal.name = name ;
    animal.colorOfEyes = colorOfEyes ;
    return animal;
}
