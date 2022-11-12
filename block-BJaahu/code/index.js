// Prototype Pattern
let questionMethods = {
    isAnswerCorrect : function (index){
        return this.options[index] === this.options[this.correctAnswerIndex]
    },
    getCorrectAnswer : function (){
        return this.options[this.correctAnswerIndex]
    }
}

function question (title ,options , correctAnswerIndex) {
    let question = Object.create (questionMethods) ;
    question.title = title ;
    question.options = options ;
    question.correctAnswerIndex = correctAnswerIndex ;
    return question ;
}


// Pseudoclassical Pattern
function Question (title ,options , correctAnswerIndex) {
    this.title = title ;
    this.options = options ;
    this.correctAnswerIndex = correctAnswerIndex ;
}
Question.prototype = {
    isAnswerCorrect : function (index){
        return this.options[index] === this.options[this.correctAnswerIndex]
    },
    getCorrectAnswer : function (){
        return this.options[this.correctAnswerIndex]
    }
}



// Class Pattern
class Question{
    constructor (title ,options , correctAnswerIndex) {
        this.title = title ;
        this.options = options ;
        this.correctAnswerIndex = correctAnswerIndex ;
    }
    isAnswerCorrect(index){
        return this.options[index] === this.options[this.correctAnswerIndex]
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
    }

}