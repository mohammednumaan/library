const mainForm = document.querySelector('form')
const formContainer = document.querySelector('.form-container')
const addBookButton = document.querySelector('.open-form')
const closeFormButton = document.querySelector('.close-form')
const submitButton = document.querySelector('.submit-form')
const content = document.querySelector('.content')
const overlay = document.querySelector('.overlay')

const readChoice = document.getElementById('check-read')
const notReadChoice = document.getElementById('check-not-read')



// form

addBookButton.addEventListener('click', () => {
    formContainer.style.display = 'flex'


})

submitButton.addEventListener('submit', main)
    

closeFormButton.addEventListener('click', () => {
    formContainer.style.display = 'none'
    overlay.style.display ='none'
})

// library

let myLibrary = [];
let tempLibrary = [];



function main(e){

    // prevents default 

    e.preventDefault()

    // book object constructor

    let book = function (title, author, page,read) {

        this.title = document.querySelector('#book-title').value
        this.author = document.querySelector('#book-author').value
        this.page = document.querySelector('#book-pages').value
        this.read = document.querySelector('#check-read').checked

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
    removeButton.classList.add('remove-button')
    
  
    
    // displays user entry inside the divs

    newTitle.textContent = `${tempLibrary.map(book => book.title)}`
    newAuthor.textContent = `Author - ${tempLibrary.map(book => book.author)}`
    newPage.textContent = `Number Of Pages - ${tempLibrary.map(book => book.page)}`
    readButton.textContent = `${tempLibrary.map(book => book.read)}`
    removeButton.textContent = 'Remove This Book'
    
    // check if user has ticked read

    
    if (readButton.textContent === 'true'){
        console.log(readButton.textContent)
        readButton.textContent = 'Not Read'
        readLabel.classList.add('read')
        readLabel.classList.remove('not-read')

    }

    else{
        readButton.textContent = 'Read'
        readLabel.classList.add('not-read')
        readLabel.classList.remove('read')


    }
    tempLibrary = []
    
    

    // appends new div, h2, p to content div

    content.appendChild(newDiv)
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newAuthor)
    newDiv.appendChild(newPage)
    newDiv.appendChild(readButton)
    newDiv.appendChild(removeButton)
    newDiv.appendChild(readLabel)
    newTitle.appendChild(horizontalLine)



    // read button 

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
    

    // remove button

    function removeBook(e){
        const books = Array.from(document.querySelectorAll('.book-border'))
        const currentBook = e.target.parentElement
        const currentIndex = books.indexOf(currentBook)
        myLibrary.splice(currentIndex, 1)
        currentBook.remove()
    }
    removeButton.addEventListener('click', removeBook)

}



