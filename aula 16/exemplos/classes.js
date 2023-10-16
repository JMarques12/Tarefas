//Criar objetos a partir de uma classe
class Coisa{
    constructor(nome, preco, qtd){
        this.nome = nome;
        this.preco = preco;
        this.qtd = qtd;
    }
    total(){
        return this.preco * this.qtd
    }
    showHTML(){
        let str = `<label>Nome:</label><label>${this.nome}</label>`;
        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.qtd}</label>`;
        str += `<label>Total:</label><label>${this.total().toFixed(2)}</label>`;
        return str;
    }
}
//Criar instâncias desta classe
const lista = [];
lista.push(new Coisa('Cadeira', 149.90, 6));
lista.push(new Coisa('peixe', 89.90, 1));
lista.push(new Coisa('bola', 49.99, 50));
lista.push(new Coisa('gato', 1200.00, 1));
lista.push(new Coisa('mesa', 5500.00, 1));

///Mostrar no console
console.table(lista);

//Mostrar no HTML
const main = document.getElementById('objetos');
lista.forEach(obj => {
    const div = document.createElement('div');
    div.innerHTML = obj.showHTML();
    main.appendChild(div);
});