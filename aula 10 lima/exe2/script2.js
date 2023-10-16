function calculo(){
    //let nome = document.getElementByld('nome')
    let velocidade = Number(document.getElementById('velocidade').value);
    let distancia = Number(document.getElementById('distancia').value);
    
    
    document.querySelector('#result').innerHTML = `o tempo percorrido sera de :${(distancia/velocidade)}`
}