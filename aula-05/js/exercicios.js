// js para o index
function comeca(){
    var nome = prompt('Digite seu nome:')
    alert('Oiee ' + nome + ', prazer em te conhecer!!')
    msginicial.innerHTML = 'Oiie ' + nome + ', prazer te conhecer!!'
}


// js para botao
function botao1(){
    msgbotoes.innerHTML = 'Você clicou no botão 1'
}

function botao2(){
    msgbotoes.innerHTML = 'Você clicou no botão 2'
}

function botao3(){
    msgbotoes.innerHTML = 'Você clicou no botão 3'
}

// js para botao
function vermelho(){
    msgbotoes.innerHTML = 'Você clicou no botão 1'
    document.getElementById('msgcores').style.color='red'
}

function azul(){
    msgbotoes.innerHTML = 'Você clicou no botão 2'
    document.getElementById('msgcores').style.color='blue'
}

function verde(){
    msgbotoes.innerHTML = 'Você clicou no botão 3'
    document.getElementById('msgcores').style.color='green'
}

//js para troco
function comprar(){
    var produto = prompt('Informe o produto que você queira comprar:')
    var valor = prompt('Informe o valor do produto R$')
    msgtroco.innerHTML = 'Você irá comprar ' + produto + ' que custa R$' + valor
}

//js para troco2
function compra2(){
    var produto = prompt('Informe o produto que você queira comprar:')
    var valor = parseFloat(prompt('Informe o valor do produto R$'))
    var valorRec = parseFloat(prompt('Informe o valor recebido R$'))
    msgtroco2.innerHTML = 'Você irá comprar ' + produto + ' que custa R$' + valor
    msgrecebe.innerHTML = 'Você deu R$' + valorRec
    var troco = valorRec - valor
    msgresult.innerHTML = 'O valor de seu troco é de R$' + troco
}

//js para salario
function reajuste(){
    var func = prompt('Informe o nome do funcionário:')
    var valor = parseFloat(prompt('Informe o valor do salário de ' + func))
    var valorRec = parseFloat(prompt('Informe a porcentagem do reajuste do salário de ' + func))
    
    var totalAument = valor * valorRec/100
    var totalReaj = totalAument + valor

    msgsalarioA.innerHTML = 'O salário atual era de R$' + valor
    msgporcent.innerHTML = 'Com um aumento de ' + valorRec + '%, o salário vai aumentar R$' + totalAument + ' no próximo mês.'
    msgsalarioR.innerHTML = 'E a partir de agora, ' + func + ' irá receber R$' + totalReaj
}

// js para bhaskara
function delta(){
    var valorA = parseFloat(prompt('Informe o valor de A: '))
    var valorB = parseFloat(prompt('Informe o valor de B: '))
    var valorC = parseFloat(prompt('Informe o valor de C: '))
    var resulDelta = (valorB * valorB) - (4 * valorA * valorC)

    msgEA.innerHTML = 'A equação atual é de ' + valorA + 'x²' + valorB + 'x' + valorC + '=0'
    msgValR.innerHTML = 'O resultado de Δ é de ' + resulDelta
}
    
