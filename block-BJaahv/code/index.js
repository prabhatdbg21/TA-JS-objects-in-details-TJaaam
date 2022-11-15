// Factory Pattern
function createProjects (name, id , noOfProjects) {
    let project = {} ;
    project.name = name ;
    project.id = id ;
    project.noOfProjects = noOfProjects ;
    project.getProjects = function(){
        return project.noOfProjects
    }
    project.changeName = function (newName) {
        return project.name = newName ;
    }
    project.incrementProject = function( value = 1){
        return project.noOfProjects += value ; 
    }
    project.decrementProject = function(value = 1){
        return project.noOfProjects -= value ;
    }
    return project ;
}



// Object.create (prototypal pattern)
let projectMethods = {
    getProjects : function(){
        return this.noOfProjects
    },
    changeName : function (newName) {
        return this.name = newName ;
    },
    incrementProject : function(value = 1){
        return this.noOfProjects += value ;
    },
    decrementProject : function(value = 1){
        return this.noOfProjects -= value ;
    }
}

function createProjects (name, id , noOfProjects) {
    let project = Object.create(projectMethods);
    project.name = name ;
    project.id = id ;
    project.noOfProjects = noOfProjects ;
    return project ;
}


/*
let p = createProjects ("Prabhat" , "DBG" , 7)
let a = createProjects ("Ankit" , "NAG" , 4)
*/


//  Pseudoclassical Pattern
function CreateProjects (name, id , noOfProjects) {
    this.name = name ;
    this.id = id ;
    this.noOfProjects = noOfProjects ;
}
CreateProjects.prototype = {
    getProjects : function(){
        return this.noOfProjects
    },
    changeName : function (newName) {
        return this.name = newName ;
    },
    incrementProject : function(value = 1){
        return this.noOfProjects += value ;
    },
    decrementProject : function(value = 1){
        return this.noOfProjects -= value ;
    }
}



// Class Pattern
class CreateProjects {
    constructor (name, id , noOfProjects) {
        this.name = name ;
        this.id = id ;
        this.noOfProjects = noOfProjects ;
    }
    getProjects(){
        return this.noOfProjects
    }
    changeName (newName) {
        return this.name = newName ;
    }
    incrementProject(value = 1){
        return this.noOfProjects += value ;
    }
    decrementProject (value = 1){
        return this.noOfProjects -= value ;
    }
}



/*
let pr = new CreateProjects ("Prabhat" , "DBG" , 7)
let an = new CreateProjects ("Ankit" , "NAG" , 4)
*/