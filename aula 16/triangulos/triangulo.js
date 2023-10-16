class triangulos{
    constructor(lado1,lado2,lado3){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }
    tipo(){
        if(this.lado1 === this.lado2 && this.lado2 == this.lado3){
            return "equilatero";
        }
        else if (this.lado2 === this.lado2 || this.lado1 === this.lado3 ) {
            return "isósceles"; 
        }   else {
            return "escaleno";

        }
    }  
    showHTML(){
        let str = `<label>lado1:</label><label>${this.lado1}</label>`;
        str += `<label>lado2:</label><label>${this.lado2}</label>`;
        str += `<label>lado3:</label><label>${this.lado3}</label>`;
        str += `<label>Tipo:</label><label>${this.tipo()}</label>`;
        return str;
    }
}
const listatriangulos = [];
listatriangulos.push(new triangulos(10, 20 ,30));
listatriangulos.push(new triangulos(10, 10 ,30));
listatriangulos.push(new triangulos(10, 20 ,10));
listatriangulos.push(new triangulos(30, 10 ,10));
listatriangulos.push(new triangulos(20, 20 ,20));



console.log(listatriangulos);


const main = document.getElementById('triangulos');
listatriangulos.forEach(trl => {
    const div = document.createElement('div');
    div.innerHTML = trl.showHTML();
    main.appendChild(div);
}
);
