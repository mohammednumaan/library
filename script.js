const mainForm = document.querySelector('form')
const formContainer = document.querySelector('.form-container')
const addBookButton = document.querySelector('.open-form')
const closeFormButton = document.querySelector('.close-form')
const submitButton = document.querySelector('.submit-form')

const content = document.querySelector('.content')

let readBox = document.getElementById('check-read')






// form

addBookButton.addEventListener('click', () => {
    formContainer.style.display = 'flex'

})

submitButton.addEventListener('click',main)
closeFormButton.addEventListener('click', () => {
    formContainer.style.display = 'none'
})

// library

let myLibrary = [];
let tempLibrary = [];


function main(e){

    // prevents default 

    e.preventDefault()

    // book object constructor

    let book = function (title, author, page) {

        this.title = document.querySelector('#book-title').value
        this.author = document.querySelector('#book-author').value
        this.page = document.querySelector('#book-pages').value
    }

    // appending books to temp an main library

    myLibrary.push(new book(book))
    tempLibrary.push(new book(book))

    // resets forms

    document.forms[0].reset()

    // displays the user entered books
    formContainer.style.display = 'none'
    displayMyLibrary()

    
}


function displayMyLibrary(){

    // creates new div, h2 and p
   
    for (let i=0; i<tempLibrary.length;i++){
        const currentBook = tempLibrary[i]
        let newDiv = document.createElement('div')
        let newTitle = document.createElement('h2')
        let newAuthor = document.createElement('h3')
        let newPage = document.createElement('p')
        let horizontalLine =document.createElement('hr')
        let readButton = document.createElement('button')
        let removeButton = document.createElement('button')
        let readLabel = document.createElement('div')





        


        // adds class lists to div, h2, p
        newDiv.classList.add('book-border')
        readButton.classList.add('button-read')
  
    

        
        // displays user entry inside the divs
        newTitle.textContent = currentBook.title
        newAuthor.textContent = `Author - ${currentBook.author}`
        newPage.textContent = `Number Of Pages - ${currentBook.page}`

        readButton.textContent = 'Read'
        //removeButton.textContent = 'Remove This Book'
        tempLibrary = []
    



        // appends new div, h2, p to content div

        content.appendChild(newDiv)
        newDiv.appendChild(newTitle)
        newDiv.appendChild(newAuthor)
        newDiv.appendChild(newPage)
        newDiv.appendChild(readButton)
        //newDiv.appendChild(removeButton)
        newDiv.appendChild(readLabel)
        newTitle.appendChild(horizontalLine)

        // checkbox data

        readButton.addEventListener('click' , () => {
            if (readButton.textContent === 'Read'){
                readButton.textContent = 'Not Read'
                readLabel.classList.add('read')
                readLabel.classList.remove('not-read')
            }
            else{
                readButton.textContent = 'Read'
                readLabel.classList.add('not-read')
                readLabel.classList.remove('read')

            }
    
        })

    
    }
}



