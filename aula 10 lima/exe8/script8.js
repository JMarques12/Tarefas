function calculo(){

    let raio = (document.getElementById('raio').value);
    let altura = Number(document.getElementById('altura').value);
    
    document.querySelector('#result').innerHTML = `a area total do cilindro em cm2 é: ${2*3*raio*(raio+altura)}<br>`
    document.querySelector('#result').innerHTML += `o volume total do cilindro em cm3 é: ${3*(raio*raio)*altura}`
}