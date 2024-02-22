const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const texto = document.getElementById('texto')
const botaoDuplo = document.getElementById('botaoDuplo')
const estadoInicial = false

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function lampLigada(){
    if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
        texto.innerHTML = "LIGADA"
        estado = "true"
    }
}

function lampDesligada(){
    if(!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
        texto.innerHTML = "DESLIGADA"
        estado = "false"
    }
}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    texto.innerHTML = "QUEBRADA"
}

function botaoLouD(){
    if(!estaQuebrada()){
        if(estado = "false"){
            lampada.src = "img/ligada.jpg"
            texto.innerHTML = "LIGADA"
        }
        else{
            lampada.src = "img/desligada.jpg"
            texto.innerHTML = "DESLIGADA"
        }
       
    }
}

ligar.addEventListener('click', lampLigada)
desligar.addEventListener('click', lampDesligada)
botaoDuplo.addEventListener('click', botaoLouD)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)

lampada.addEventListener('dblclick', lampQuebrada)
