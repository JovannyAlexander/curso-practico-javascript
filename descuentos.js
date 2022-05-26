//const precioOriginal = 120;
//const descuento = 18;

function calcularPrcioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

  return precioConDescuento;
}

function calcualPrecioConDescuento(){
    const InputPrice =document.getElementById ("inputPrice");
    const value1 = inputPrice.value;
    const InputDiscount =document.getElementById ("inputDiscount");
    const value2 = inputDiscount.value;

    const precioFinal = calcularPrcioConDescuento(value1,value2);
    alert(precioFinal);
}

/*console.log ({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
 });*/

