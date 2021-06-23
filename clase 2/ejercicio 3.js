/*
3) Contador 2: La venganza del contador
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
Se llega a limite
La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
anteriormente creada llamada final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
termine el recorrido
*/

console.clear();

var limite = 10;
var x = 0;
var pares = 0;
var multiplo = 0;
var final = 10;
var suma = 0;

while (x < limite && pares < final) 
{
  x++;
  suma = suma + x;
  if (x % 2 === 0) 
  {
    pares++;
  }
  if (x % 3 === 0) 
  {
    multiplo++;
  }
  
}

console.log("cantidad n multiplos de 3", multiplo);
console.log("suma de los n hasta final", suma);
console.log("los pares son: ", pares);