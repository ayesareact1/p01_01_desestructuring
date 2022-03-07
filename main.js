// Spread operator (...) Nuevo operador de ECMAScript 6 (2015)
// Itera un array

let frutasConvencionales = ['pera','manzana','naranja'];
let frutasTropicales = ['piña','mango'];

let frutas = [...frutasConvencionales, ...frutasTropicales];
console.log(frutas);

// Rompe la referencia

frutas[1] = 'plátano';
console.log(frutas);
console.log(frutasConvencionales);


// Desestructuring ECMA6 Nueva sintaxis para extraer valor de objetos y asignar a variable

// Para arrays

let valores = [10, 20, 30, 40, 50];

let [variable1, variable2, variable3, ...restoValores] = valores; // También rompe la referencia
console.log(variable1);
console.log(restoValores);

// Para objetos

let alumno = {
    nombre: 'Pilar',
    apellidos: 'Fernández López',
    edad: 40
}

let {apellidos, edad} = alumno;

console.log(apellidos);
console.log(edad);

let player = {
    name: 'Lionel',
    surname: 'Messi',
    team: 'PSG',
    goals: 0
}

const {name, surname, ...seasonData} = player;
console.log(seasonData);

