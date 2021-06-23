console.clear();

var repartidores = 2; //cantidad de repartidores
var feriado = true; // true: feriado - false :no es feriado
var ganDia = 1000; //ganancia de pizzeria para distribuir en empleados
var sueldoFeriado= 0.8; // porcentaje destinado a empleados (diaferiado)
var sueldoNormal = 0.65; // porcentaje destinado a empleados (dia no feriado)

if (ganDia > 0) 
{
  if (feriado) 
  {
    console.log("El total del sueldo para empleados es: ", ganDia * sueldoFeriado);
    console.log("Sueldo por cada empleado es: ", (ganDia * sueldoFeriado) / repartidores);
    console.log("La ganancia del comercio es: ", ganDia - ganDia * sueldoFeriado);
  } 
  else 
  {
    console.log("El total del sueldo para empleados es: ", ganDia * sueldoNormal);
    console.log("Sueldo por cada empleado es: ",(ganDia * sueldoNormal) / repartidores);
    console.log("La ganancia del comercio es: ", ganDia - ganDia * sueldoNormal);
  }
} 
else 
{
  console.log("hoy no se trabajo.");
}
