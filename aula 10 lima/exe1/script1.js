
    // let nome = document.getElementById ('nome')
    // let resultdo = document.getElementById ('resultado')

function calculo(){
    //let nome = document.getElementByld('nome')
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    
    document.querySelector('#result').innerHTML = `A soma de 'a' + 'b' divido por 'c' é igual a: ${(a+b)/c}`
}



