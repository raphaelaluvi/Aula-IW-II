function soma(){
    var n1 = parseFloat(document.getElementById('n1'). value)
    var n2 = parseFloat(document.getElementById('n2'). value)
    var soma = n1 + n2
    resultado.innerHTML = soma
}

function subtracao(){
    var n1 = parseFloat(document.getElementById('n1'). value)
    var n2 = parseFloat(document.getElementById('n2'). value)
    var subtracao = n1 - n2
    resultado.innerHTML = subtracao
}

function multiplicacao(){
    var n1 = parseFloat(document.getElementById('n1'). value)
    var n2 = parseFloat(document.getElementById('n2'). value)
    var multiplicacao = n1 * n2
    resultado.innerHTML = multiplicacao
}

function divisao(){
    var n1 = parseFloat(document.getElementById('n1'). value)
    var n2 = parseFloat(document.getElementById('n2'). value)
    var divisao = n1 / n2
    resultado.innerHTML = divisao
}

function limpa(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    n1.value = ""
    n2.value = ""
    resultado.innerHTML = "0"
}