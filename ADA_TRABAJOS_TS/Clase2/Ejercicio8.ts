function calcularArea( tipo: string){
    if (tipo === "circulo"){
        let radio = 5;
        let area = Math.PI * radio * radio;
        console.log(area);
    }else if (tipo === "rectangulo"){
        let base = 10;
        let altura = 5;
        let area = base * altura;
        console.log(area);
    }
return calcularArea;
}

calcularArea("circulo");
calcularArea("rectangulo");