
/*
Recopilacion de datos personales

    Esta funcion obtine los datos de una persona y los devuelve
*/ 


function personalInformation ()
{
    //ingresar datos personales
    let data = {
        names : 'Pepe',
        surname : 'Pompin',
        age : 99,
        profession : 'Developer',
    }
    return data
}

let result = personalInformation()

console.log(result)