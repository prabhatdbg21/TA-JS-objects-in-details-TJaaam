/*
let title = 'Where is the capital of Jordan' ;
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi']
let correctAnswerIndex = 1 ;

function isAnswerCorrect (index){
  return index === correctAnswerIndex
}

function getCorrectAnswer (){
  return options[1]
}



let question = {
    title : 'Where is the capital of Jordan' ,
    options : ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'] ,
    correctAnswerIndex : 1 ,
    isAnswerCorrect (index){
      return index === question.correctAnswerIndex
    },
    getCorrectAnswer (){
      return question.options[question.correctAnswerIndex];
    }
}


function createQuiz (title , options , correctAnswerIndex) {
    let question = {}
    question.title = title ;
    question.options = options ;
    question.correctAnswerIndex = 1 ;
    question.isAnswerCorrect = function (index){
      return index === question.correctAnswerIndex
    },
    question.getCorrectAnswer = function (){
      return question.options[question.correctAnswerIndex];
    }
    return question ;
  }


  */

function createQuiz (title , options , correctAnswerIndex) {
    let question = {}
    question.title = title ;
    question.options = options ;
    question.correctAnswerIndex = 1 ;
    question.isAnswerCorrect = function (index){
      return index === this.correctAnswerIndex
    },
    question.getCorrectAnswer = function (){
      return this.options[this.correctAnswerIndex];
    }
    return question ;
  }