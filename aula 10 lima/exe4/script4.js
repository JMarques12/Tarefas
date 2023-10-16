function calculo(){
    //let nome = document.getElementByld('nome')
    let nome = (document.getElementById('nome').value);
    let vitorias = Number(document.getElementById('vitorias').value);
    let empates = Number(document.getElementById('empates').value);
    
    document.querySelector('#result').innerHTML = `os pontos de ${nome} é: ${(vitorias*3)+empates}`
}