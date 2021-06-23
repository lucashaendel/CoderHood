/*
    Un taller mecanico tiene una lista de autos para arreglar en el dia, de cada auto sabemos..:
    
    * Nombre del dueño
    * Valor del arreglo
    * Tiempo que tarda el arreglo (en horas)
    * lista de repuestos
    
    El dueño del taller quiere saber:
    1) Cual es el arreglo mas caro y que repuestos necesita
    2) todos los arreglos para personas que se llamen juan
    3) el precio total de los arreglos

*/


// declaracion de las variables!
let client = 
[
    { names: 'juan', cost: 2000, time: 48, carParts: ['bumper'] },
    { names: 'Pablo',cost: 80000,time: 120,carParts: ['bumper','door','wheel']},  
    { names: 'Tomi', cost: 5000, time: 48, carParts: ['bumper'] },
    { names: 'juan', cost: 11000, time: 72, carParts: ['trunk'] },
]

let maxCost = { cost:0 }

let carPartsJuan = []

let totalcost =0;


// funcion para determinar los repuestos de los clientes -JUAN-
function sumCarPartsJuan(carParts, carPartsJuan)
{
    for (let i=0;i<carParts.length;i++)
    {
        let car_parts = carParts[i]
        carPartsJuan.push(car_parts)
    }
   return carPartsJuan 
}

// for para recorrer todos los clientes y obtener datos necesarios
for (let i=0 ; i<client.length ; i++)
{
    let car = client[i]

    if (car.cost > maxCost.cost)
        { maxCost = car}

    if (car.names==='juan')
        { carPartsJuan = sumCarPartsJuan(car.carParts, carPartsJuan) }
    if (car.cost >0)
        { totalcost = totalcost + car.cost }
}

// Concatenacion de las variables
const solution1  = 'El arreglo mas caro cuesta ' + maxCost.cost + ' y necesita los repuestos: ' + maxCost.carParts

const solution2 = 'Los Juanes tienen que arreglar: '+ carPartsJuan

const solution3 = 'la suma de la totalidad de los arreglos es: ' + totalcost

//imprimir el resultado en la consola
console.log(solution1)
console.log(solution2)
console.log(solution3)