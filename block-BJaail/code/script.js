class BookList {
    constructor ( root , list =[]) {
        this.books = list ;
        this.root = root ;
    }
    add (text1 , text2 , text3){
        let book = new Book (text1 , text2 , text3) ;
        this.books.push(book)
        this.createUI();
    }
    handleDeletec (id){
        let index = this.books.findIndex((book) => book.id === id);
        this.books.splice (index , 1) ;
        this.createUI() ;  
    }
    createUI(){
        this.root.innerHTML = ""
        this.books.forEach((book) =>{
            let ui = book.createUI() ;
            ui.querySelector(".delete").addEventListener ("click" , this.handleDeletec.bind(this, book.id)) ;
            this.root.append(ui) ;
        })
    }
}

class Book{
    constructor (text1 , text2 , text3) {
        this.text1 = text1 ;
        this.text2 = text2 ;
        this.text3 = text3 ;
        this.read = "unread"
        this.id = `id-${Date.now()}`
    }
    createUI(){
        let li = document.createElement("li");
        let span1 = document.createElement("span") ;
        span1.innerText = this.text1 ;
        span1.classList.add("title") ;
        let span2 = document.createElement("span") ;
        span2.innerText = this.text2 ;
        span2.classList.add("auther") ;
        let span3 = document.createElement("span") ;
        span3.innerText = this.text3 ;
        span3.classList.add("iSBN") ;
        let span4 = document.createElement("span") ;
        span4.innerText = "X" ;
        span4.classList.add("delete") ;
        li.append(span1 ,span2 ,span3 , span4) ;
        return li ;
    }
}


let button = document.querySelector("button")
let myBook = new BookList (document.querySelector(".books"))


button.addEventListener("click" , (event) => {
    let title = document.querySelector('#title').value ;
    let author = document.querySelector('#author').value ;
    let isbn = document.querySelector('#isbn').value ;
    myBook.add(title , author , isbn) ;
    document.querySelector('#title').value = '' ;
    document.querySelector('#author').value = '' ;
    document.querySelector('#isbn').value = '' ;
})
