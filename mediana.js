const lista1 = [
    100,
    200,
    500,
    400000000,
]

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }else {
        return false;
    }
}

function calcularMediaAritmetica(lista){
 
    const sumaLisata = lista.reduce(
     function (valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;
     }
 )
 
 const promediolista1 = sumaLisata / lista.length;
 return promediolista1;
 }

let mediana;

if (esPar(lista1.length)){
    // nesecitamos dos elementos
    // el promedio
    // mediana

    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]); 

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
    // posicion mitadlista1 dentro de lista 1

}