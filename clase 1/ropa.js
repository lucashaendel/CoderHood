console.clear()
// precioDePrenda (que ronda entre los 1500 y 3000 pesos) 
// porcentajeDeAumento (que ronda entre el 25-100% ) 
// precioFinal (precioDePrenda con el aumento agregado) Ademas, implementar las siguiente funcionalidades:
// El programa debe informar en pantalla el precio final El programa debe informar en pantalla 'Precio excedido' cuando el precio final supere los $4000

var precioDePrenda = 3000;
var porcentajeDeAumento = 0.25
var precioAumentado =  precioDePrenda*porcentajeDeAumento;
var precioFinal = precioDePrenda+precioAumentado;

if (precioFinal>=4000)
{
  console.log('precio Excedido!')
}
else
{
  console.log('el precio final es: ',precioFinal)
}