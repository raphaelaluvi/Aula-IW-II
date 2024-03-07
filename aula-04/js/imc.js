function diagnostico(imc){
    var genero = document.getElementById('genero').value
    if(genero == 'masc'){
        if (imc<20){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Abaixo do peso normal'
        }
        else if(20<=imc && imc<25){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Normal'
        }
        else if(25<=imc && imc<30){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Levemente obeso'
        }
        else if(30<=imc && imc<35){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau I'
        }
        else if(imc>=40){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau III'
        }
        else{
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau II'
        }
    }
    else if (genero == "fem"){
        if(imc<19){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Abaixo do peso normal'
        }
        else if(19<=imc && imc<24){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Normal'
        }
        else if(24<=imc && imc<29){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Levemente obeso'
        }
        else if(29<=imc && imc<34){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau I'
        }
        else if(imc>=39){
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau III'
        }
        else{
            diag.innerHTML = 'Diagnóstico:'
            valorDiag.innerHTML = 'Obeso grau II'
        }
    }
    else{
        diag.innerHTML = 'Sem dados suficientes'
    }
}

function calcula(){
    var altura = parseFloat(document.getElementById('altura'). value)
    var peso = parseFloat(document.getElementById('peso'). value)
    var imc = peso/(altura*altura)
    resultado.innerHTML = 'Resultado:'
    valorIMC.innerHTML = 'Seu IMC é de '+ imc
    diagnostico(imc)
}