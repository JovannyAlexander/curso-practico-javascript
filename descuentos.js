//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

  return precioConDescuento;
}

function calculaPrecioConDescuento1(){
    const InputPrice =document.getElementById("InputPrice");
    const precio = InputPrice.value;
    const InputDiscount =document.getElementById("InputDiscount");
    const descuento = InputDiscount.value;

    const precioFinal = calcularPrecioConDescuento(precio,descuento);

    const resultP =document.getElementById("resultP");
    resultP.innerText= "El valor con descuento es $" + precioFinal;
    //alert(precioFinal);
}

/*console.log ({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
 });*/

