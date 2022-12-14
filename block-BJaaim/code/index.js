let ul = document.querySelector(".ul")

class Question {
    constructor (title , options = {} , answer) {
        this.title = title ;
        this.options = options ;
        this.answer = answer ;
        this.id = `id-${Date.now()}`
    }
    isCorrect(givenAnswer){
        if (this.answer === givenAnswer){
            return true ;
        }
        else {
            return false ;
        }
    }
    getCorrectAnswer(){
        return alert(`correct answer is ${this.answer}`)
    }
    createUI(){
        let li = document.createElement('li');
        li.innerText= this.title ;
        let lia = document.createElement('li');
        lia.innerText = this.options[0]
        let lib = document.createElement('li');
        lib.innerText = this.options[1]
        let lic = document.createElement('li');
        lic.innerText = this.options[2]
        let lid = document.createElement('li');
        lid.innerText = this.options[3]
        li.append (lia , lib, lic, lid)
        return li
    }
}

let prabhat = new Question ("My NAME IS " , ["PRABHAT" , "KUMAR" , "]HA" , "ANKIT"] , "PRABHAT" )
prabhat.createUI()
prabhat.getCorrectAnswer()
prabhat.isCorrect("PRABHAT")
 

class Quiz {
    constructor (questions = [], indexOfVisibleQuestion = 0  , score = 0){
        this.questions = questions ;
        this.indexOfVisibleQuestion = indexOfVisibleQuestion ;
        this.score = score ;
    }
    addQuestion(title , options = [] , answer){
        let question = new Question (title , options = [] , answer)
        this.questions.push(question);
        this.createUI() ;
        this.options = options ;
        console.log (options)
    }
    nextQuestion(){

    }
    updateScore(){

    }
    createUI(){
        ul.innerHTML = '' ;
        this.questions.forEach ((question) =>{
            ul.append (question.createUI())
            console.log(question.createUI())
        })
    }
}

let allQuestion = new Quiz();
allQuestion.addQuestion ("My NAME IS " , ["PRABHAT" , "KUMAR" , "]HA" , "ANKIT"] , "PRABHAT")
allQuestion.addQuestion ("My NAME IS rhat" , ["PRABHAT" , "KUMAR" , "]HA" , "ANKIT"] , "PRABHAT")
