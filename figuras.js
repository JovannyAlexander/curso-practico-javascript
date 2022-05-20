// codigo del cudrado
console.group("cuadrado");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
}


//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// codigo del triangulo
console.group("triangulo");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;*/

/*console.log("Los lados del triangulo miden " + ladoTriangulo1 +  " cm, "   + ladoTriangulo2 + " cm, "
 + baseTriangulo + " cm")

console.log("la altura del triangulo  es: " + alturaTriangulo + " cm");*/

function perimetroTriangulo (lado1,lado2,base){
    return lado1 + lado2 + base;

}
//console.log("el perimetro del triangulo es: " + perimetroTriangulo + " cm" );

//const areaTriangulo = (base * altura) / 2;
//console.log("El área del triangulo es: " + areaTriangulo + " cm^2");
function areaTriangulo (base,altura){
    return (base * altura)/2;

}


console.groupEnd();

// codigo del Circulo
console.group("circulos");
// radio

//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + " cm");
// Diametro

function diametroCirculo(radio){
   return radio * 2;
}

//pi

const PI = Math.PI;
console.log("PI es: " + PI );

//circunsferencia

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);

    return diametro * PI;
}


// Area

function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.groupEnd();