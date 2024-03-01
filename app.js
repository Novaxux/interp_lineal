
function calcular (){

    let x = Number (document.getElementById('x').value)
    let x0 =Number( document.getElementById('x0').value)
    let fx0 =Number( document.getElementById('fx0').value)
    let x1 = Number (document.getElementById('x1').value)
    let fx1 = Number(document.getElementById('fx1').value)

    if (!!x && !!x0 && !!fx0 && !!x1 && !!fx1){
        let fx = fx0 + ((fx1 - fx0)/(x1-x0))*(x-x0)
        
        document.getElementById('resultado').value = fx
        
        return document.getElementById('resultado').innerHTML='f(x)'+' = ' + fx
    }else
        document.getElementById('resultado').innerHTML='Error, todos los campos son obligatorios'
}

function calcular_err_rel (){     

    let valExact = Number (document.getElementById('valExact').value)
    let fx = Number(document.getElementById('resultado').value)

    if(!!fx && !!valExact){
        let valAprox = fx
        let errRel =100 * ((valExact-valAprox)/valExact)
        
        return  document.getElementById('resultado2').innerHTML='Error Relativo' + ' = ' + errRel.toFixed(5) + '%'
    }else
        document.getElementById('resultado2').innerHTML='Error llene los campos solicitados'
}

