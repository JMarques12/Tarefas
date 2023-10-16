function calculo(){
  
    let mercadoria = (document.getElementById('mercadoria').value);
    let valor = Number(document.getElementById('valor').value);
    let porcentagem = Number(document.getElementById('porcentagem').value);
    
    document.querySelector('#result').innerHTML = `O novo valor da mercadoria ${mercadoria} é: ${(porcentagem/100+1)*valor}`
}