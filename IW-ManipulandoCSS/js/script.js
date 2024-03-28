/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
//titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
//document.querySelector('h1').style.color = "red";
//titulo.style.color = "red";
//titulo.style.backgroundColor = "#000";
//titulo.style.borderBottom = "2px solid red";
//titulo.style.padding = "0.625rem";
//titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
//box[0].setAttribute('class', 'escura')
//box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnPink = document.querySelector('#btpink')

let btnBlue = document.querySelector('#btblue')

let btnYellow = document.querySelector('#btyellow')

let btnRed= document.querySelector('#btred')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)
btnBlue.addEventListener('click', modoBlue)
btnYellow.addEventListener('click', modoYellow)
btnRed.addEventListener('click', modoRed)


function modoDark() {
    event.preventDefault()
    console.log('modo dark')
    tela.classList.add("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
}

function modoLight() {
    event.preventDefault()
    console.log('modo light')
    tela.classList.remove("dark")
    tela.classList.add("light")
    tela.classList.remove("pink")
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
}

function modoPink() {
    event.preventDefault()
    console.log('modo pink')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.add("pink")
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
}

function modoBlue() {
    event.preventDefault()
    console.log('modo blue')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.add("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
}

function modoYellow() {
    event.preventDefault()
    console.log('modo yellow')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.remove("blue")
    tela.classList.add("yellow")
    tela.classList.remove("red")
}

function modoRed() {
    event.preventDefault()
    console.log('modo yellow')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.add("red")
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/
