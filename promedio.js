


 



function calcularMediaAritmetica(lista){
   // let sumaLisata =0;

/*for(let i = 0; i < lista.length; i++){
    sumaLisata = sumaLisata + lista[i];
}*/

const sumaLisata = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
)

const promediolista1 = sumaLisata / lista.length;
return promediolista1;
}