// codigo del cudrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// codigo del triangulo
console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden " + ladoTriangulo1 +  " cm, "   + ladoTriangulo2 + " cm, "
 + baseTriangulo + " cm")

console.log("la altura del triangulo  es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo es: " + perimetroTriangulo + " cm" );

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

// codigo del Circulo
console.group("circulos");
// radio

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");
// Diametro

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + " cm");
 
//pi

const PI = Math.PI;
console.log("PI es: " + PI );

//circunsferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

// Area

const areaCirculo = (radioCirculo *radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + " cm^2");
console.groupEnd();
