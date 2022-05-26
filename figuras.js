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
//console.log("PI es: " + PI );

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

// triangulo Isoseles


function alturaTrianguloI(ladoA, ladoB, ladoBase) {
    if (ladoA == ladoB && ladoA != ladoBase) {
       // console.log("Es un triangulo isosceles");
        const cateto = (ladoBase /2)** 2;
        const hipotenusa = (ladoA)**2;
        const alturaI = Math.sqrt((hipotenusa) - (cateto));
        return alturaI;
        } else {
       return("no es un triangulo correcto");
    }
}


//aqui interactuamos con el HTML


function calcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado");
   const value = input.value;


   const perimetro = perimetroCuadrado(value);
   alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = InputCuadrado.value;

    const Area = areaCuadrado(value);
    alert(Area);
}

// interaccion triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputLado1Triangulo");
    const value1 = parseFloat(InputLado1Triangulo.value);
    
    const lado2 = document.getElementById("InputLado2Triangulo");
    const value2 = parseFloat(InputLado2Triangulo.value);

    const base = document.getElementById("InputbaseTriangulo");
    const value3 = parseFloat(InputbaseTriangulo.value);
    
    const perimetrotr = perimetroTriangulo(value1,value2,value3);
    alert(perimetrotr);
 }

 function calcularAreaTriangulo(){
    const lado1 = document.getElementById("InputLado1Triangulo");
    const value1 = parseFloat(InputLado1Triangulo.value);
    
    const lado2 = document.getElementById("InputLado2Triangulo");
    const value2 = parseFloat(InputLado2Triangulo.value);

    const base = document.getElementById("InputbaseTriangulo");
    const value3 = parseFloat(InputbaseTriangulo.value);

    const altura = parseFloat(Math.sqrt(value1*value2));
    
    const areaT = areaTriangulo(value3,altura);
    alert(areaT);
 }

 // interaccion Circulo

 function calcularDiametroCirculo(){
    const lado1 = document.getElementById("InputRadioCirculo");
    const value1 = parseFloat(InputRadioCirculo.value);
    
    const diamec = diametroCirculo(value1);
    alert(diamec);
 }

 function calcularPerimetroCirculo(){
    const lado1 = document.getElementById("InputRadioCirculo");
    const value1 = parseFloat(InputRadioCirculo.value);
    
    const perimetroC = perimetroCirculo(value1);
    alert(perimetroC);
 }

 function calcularAreaCirculo(){
    const lado1 = document.getElementById("InputRadioCirculo");
    const value1 = parseFloat(InputRadioCirculo.value);
    
    const areaC = areaCirculo(value1);
    alert(areaC);
 }

function CalculaAlturaTrianguloI(){
    const lado1 = document.getElementById("InputLado1TrianguloI");
    const value1 = InputLado1TrianguloI.value;

    const lado2 = document.getElementById("InputLado2TrianguloI");
    const value2 = InputLado2TrianguloI.value;
    
    const lado3 = document.getElementById("InputbaseTrianguloI");
    const value3 = InputbaseTrianguloI.value;

    const altura = alturaTrianguloI(value1,value2,value3);
    alert (altura);
}


