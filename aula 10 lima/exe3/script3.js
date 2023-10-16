function calculo(){
    //let nome = document.getElementByld('nome')
    let nome = (document.getElementById('nome').value);
    let salario = Number(document.getElementById('salario').value);
    let porcentagem = Number(document.getElementById('porcentagem').value);
    
    document.querySelector('#result').innerHTML = `o valor do novo salario de ${nome} é: ${(porcentagem/100+1)*salario}`
}