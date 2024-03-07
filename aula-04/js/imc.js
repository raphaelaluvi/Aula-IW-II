



function diagnostico(imc){
    var genero = document.getElementById('genero').value
    if(genero == 'masc'){
        if (imc<20){
            diagnostico.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Abaixo do peso normal'
        }
        else if(20<=imc<25){
            diagnostico.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Normal'
        }
        else if(25<=imc<30){
            diagnostico.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Levemente obeso'
        }
        else if(30<=imc<35){
            diagnostico.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau I'
        }
        else if(imc>=40){
            diagnostico.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau III'
        }
        else{
            diagnostico.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau II'
        }
    }
}

function calcula(){
    var altura = parseFloat(document.getElementById('altura'). value)
    var peso = parseFloat(document.getElementById('peso'). value)
    var imc = peso/(altura*altura)
    console.log('')
    resultado.innerHTML = 'Resultado:'
    valorIMC.innerHTML = 'Seu IMC é de '+ imc
    diagnostico()
}