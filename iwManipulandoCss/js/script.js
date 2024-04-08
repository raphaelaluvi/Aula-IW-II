/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/branco.jpg')
let descricao = document.querySelector('h2')

/* MANIPULAR CSS */
//document.querySelector('h1').style.color = "red";
//titulo.style.color = "red";
//titulo.style.backgroundColor = "#000";
//titulo.style.borderBottom = "2px solid red";
//titulo.style.padding = "0.625rem";
//titulo.style.borderRadius = "5px";

/////// MODOS DE COR ///////

let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnPink = document.querySelector('#btpink')

let btnBlue = document.querySelector('#btblue')

let btnYellow = document.querySelector('#btyellow')

let btnRed= document.querySelector('#btred')

let btnGreen= document.querySelector('#btgreen')

let btnPurple= document.querySelector('#btpurple')


btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)
btnBlue.addEventListener('click', modoBlue)
btnYellow.addEventListener('click', modoYellow)
btnRed.addEventListener('click', modoRed)
btnGreen.addEventListener('click', modoGreen)
btnPurple.addEventListener('click', modoPurple)


function modoDark() {
    event.preventDefault()
    console.log('modo dark')
    tela.classList.add("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
    tela.classList.remove("green")
    tela.classList.remove("purple")
    imagem.src = 'img/preto.jpg'
    descricao.textContent = 'Divertidamente'
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
    tela.classList.remove("green")
    tela.classList.remove("purple")
    imagem.src = 'img/branco.jpg'
    descricao.textContent = 'Divertidamente'
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
    tela.classList.remove("green")
    tela.classList.remove("purple")
    imagem.src = 'img/rosa.jpg'
    descricao.textContent = 'Bing Bong'
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
    tela.classList.remove("green")
    tela.classList.remove("purple")
    imagem.src = 'img/azul.jpg'
    descricao.textContent = 'Tristeza'
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
    tela.classList.remove("green")
    tela.classList.remove("purple")
    imagem.src = 'img/amarelo.jpg'
    descricao.textContent = 'Alegria'
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
    tela.classList.remove("green")
    tela.classList.remove("purple")
    imagem.src = 'img/vermelho.jpg'
    descricao.textContent = 'Raiva'
}

function modoGreen() {
    event.preventDefault()
    console.log('modo yellow')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
    tela.classList.add("green")
    tela.classList.remove("purple")
    imagem.src = 'img/verde.jpg'
    descricao.textContent = 'Nojinho'
}

function modoPurple() {
    event.preventDefault()
    console.log('modo yellow')
    tela.classList.remove("dark")
    tela.classList.remove("light")
    tela.classList.remove("pink")
    tela.classList.remove("blue")
    tela.classList.remove("yellow")
    tela.classList.remove("red")
    tela.classList.remove("green")
    tela.classList.add("purple")
    imagem.src = 'img/roxo.jpg'
    descricao.textContent = 'Medo'
}