let form = document.querySelector("form") ;
let next = document.querySelector(".next") ;
let prev = document.querySelector(".prev") ;
let quizElm = document.querySelector(".quiz")
let totalQuestion = document.querySelector ('header p')
let showResult = document.querySelector(".show_result")

class Question {
    constructor (title , options , correctAnswerIndex) {
        this.title = title ;
        this.options = options ;
        this.correctAnswerIndex = correctAnswerIndex ;
    }
    isCorrect(givenAnswer){
        return this.options[this.correctAnswerIndex] === givenAnswer ;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex] ;
    }
}

class Quiz {
    constructor (questions = [] , score = 0){
        this.questions = questions ;
        this.score = score ;
        this.activeIndex = 0 ;
    }
    incrementScore(){
        this.score = this.score + 1 ;
    }
    nextQuestion(){
        this.activeIndex = this.activeIndex + 1 ;
        this.createUI();
    }
    prevQuestion(){
        this.activeIndex = this.activeIndex - 1 ;
        this.createUI();
    }
    addQuestion(title , options ,  answerIndex){
        let question = new Question (title , options, answerIndex) ;
        this.questions.push(question);
    }
    /*
    this thing is used in created in createUI()
            <form>
                <fieldset name="fields">
                    <legend>
                        Please select your preferred contact method
                    </legend>
                    <div class="options">
                        <div class="box">
                            <input 
                                type="radio"
                                id="contactChoice1"
                                name="contact"
                                value="email"
                                checked
                            >
                            <label for="contactChoice1"> Email </label>
                        </div>

                        <div class="box">
                            <input 
                                type="radio"
                                id="contactChoice2"
                                name="contact"
                                value="phone"
                            >
                            <label for="contactChoice2"> Phone </label>
                        </div>

                        <div class="box">
                            <input 
                                type="radio"
                                id="contactChoice3"
                                name="contact"
                                value="mail"
                            >
                            <label for="contactChoice3"> Mail </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
    */

    handleButtons(){
        if(this.activeIndex === 0) {
            prev.style.visibility = 'hidden'
        }
        else if (this.activeIndex === this.questions.length - 1) {
            next.style.visibility = 'hidden'
            showResult.style.visibility = 'visible'
        }
        else {
            prev.style.visibility = 'visible'
            next.style.visibility = 'visible'
            showResult.style.visibility = 'hidden'
        }
    }

    createUI() {
        quizElm.innerHTML = '' ;
        let activeQuestion = this.questions[this.activeIndex];
        totalQuestion.innerText = `Total question :  ${this.questions.length}`
        let form = document.createElement('form') ;
        let fieldset = document.createElement('fieldset') ;
        let legend = document.createElement('legend') ;
        legend.innerText = activeQuestion.title;
        let optionsElm = document.createElement('div') ;
        optionsElm.classList.add('options') ;
        let buttonWrapper = document.createElement('div') ;
        let button = document.createElement('button') ;
        button.innerText = 'submit'
        button.type = 'submit' ;
        buttonWrapper.append(button);

        activeQuestion.options.forEach((option , index) => {
            let input = document.createElement('input') ;
            let div = document.createElement('div') ;
            div.classList.add('box')
            input.id = `option-${index}` ; //  input.id and lable.for both value should be same to connect each other
            input.type = 'radio' ;
            input.name = 'options' ;
            input.value = option ;
            let lable = document.createElement('label') ;
            lable.for = `option-${index}` ; //  input.id and lable.for both value should be same to connect each other
            lable.innerText = option ;

            form.addEventListener('submit' , (event) => {
                event.preventDefault() ;
                if (input.checked){
                    if (activeQuestion.isCorrect(input.value )) {
                        this.incrementScore();
                    }
                }
            })

            div.append(input , lable)
            optionsElm.append(div)
        })

        this.handleButtons() ;

        fieldset.append(legend, optionsElm , buttonWrapper) ;
        form.append(fieldset) ;
        quizElm.append(form) ;
    }
}

function init() {
    let quiz = new Quiz();
    quizCollection.forEach((question) => {
        quiz.addQuestion(question.title , question.options , question.answerIndex)
    })
    quiz.createUI()

    next.addEventListener("click" , quiz.nextQuestion.bind(quiz)) ;

    prev.addEventListener("click" , quiz.prevQuestion.bind(quiz)) ;

    showResult.addEventListener ("click" , () => {
        alert (`Your score is ${quiz.score}`)
    } )
}

init() ;
