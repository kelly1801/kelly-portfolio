
let contrastToggle = false;
const scaleFactor = 1 / 20


function addDarkTheme (){
document.body.classList += " dark_theme"
contrastToggle = !contrastToggle
if (contrastToggle) {
    
    document.body.classList += " dark_theme"
} else {
    document.body.classList.remove("dark_theme")
}
}

function contact(event) {

    event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading')
const succes = document.querySelector('.modal__overlay--succes')
loading.classList += " modal__overlay--visible"

emailjs
.sendForm('service_jhmjypy', 
    'template_5xjw9p6',
    event.target,
    'LMJmwinn9qYcgibQa'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        succes.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("The email service is temporarily unavailable. Please contact me on fabianachara@gmail.com")
         })
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
   
    isModalOpen = true
    document.body.classList += " modal--open"

}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
const x = event.clientX * scaleFactor
const y = event.clientY * scaleFactor

for (let i = 0; i < shapes.length; i++) {
   const isOdd = i % 2 !== 0
   const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`

}
}