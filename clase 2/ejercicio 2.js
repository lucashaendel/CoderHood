//Contador Sea una variable numerica entera y positiva 'limite': 
// Recorrer desde 0 hasta limite 
// Imprimir al final del programa la cantidad de numeros impares 
// Imprimir al final del programa la cantidad de numeros menores de limite / 2

console.clear()

var limite = 16;
var menor =0;
var nimpar = 0;

for (let i=0; i<=limite; i++)
{
  
  if (i%2 !==0 && i>0)
  {
    nimpar++  
  }
  if (i< limite/2)
  {
    menor++
  }
}
console.log('la cantidad de menores de limite/2 es: ',menor)
console.log('la cantidad de n° impares es: ',nimpar)
