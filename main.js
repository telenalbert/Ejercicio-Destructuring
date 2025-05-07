//Ejercicios Destructuración

const empleados = [
    {name: "Luis", email: "Luis@gmail.com"},
    {name: "Ana", email: "Ana@gmail.com"},
    {name: "Andrea", email: "Andrea@gmail.com"},
]
//Extrae la empleada Ana con todos sus datos personales:
const [,personas] = empleados
console.log(personas)
//Extrae el email del empleado Luis --> Luis@gmail.com
const [Luis] = empleados
console.log(Luis)
const {email} = Luis
console.log(email)

//Ejercicio 2
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

//Cambia el nombre de la propiedad “name” por “nombre"
const {name: nombre} = pokemon
//Extrae el nombre del Pokemon
console.log(nombre)
//Extrae el tipo de Pokemon que es
const {type} = pokemon
console.log(type)
//Extrae el movimiento “Tackle”
const {moves} = pokemon
console.log(moves)
const [,movimiento] = moves
console.log(movimiento)

//Ejercicios Spread/Rest
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lighting rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
//console.log(pokemon)
const pokemones = { ...pokemon , ...pikachu}
console.log(pokemones)

//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
function sumEveryOther(...numeros){
    const numerosRecibidos = [...numeros];
    let suma = 0;
    for (let i = 0; i < numerosRecibidos.length; i++){
        suma = suma + numerosRecibidos[i]
    }
    return suma
}

console.log(sumEveryOther(1,5,5,8,7,6,10))

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

function addOnlyNums (...array){
    const arrayRecibido = [...array];
    let sumaNumeros = 0
    for (let i = 0; i < arrayRecibido.length; i++)
        if (typeof arrayRecibido[i] === "number"){
            sumaNumeros = sumaNumeros + arrayRecibido[i]
        }
        return sumaNumeros
}
console.log(addOnlyNums("wawa",45,"peo,","10",10,1000))

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...argumentos){
    const argumentoRecibido = [...argumentos];
    let sumaArgumentos = 0
    for (let i = 0; i < argumentoRecibido.length; i++) {
        sumaArgumentos = sumaArgumentos + 1
    }
    return sumaArgumentos
}
console.log(countTheArgs("poto", "daniela", "que aburrido", 47, 54))

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays( array1, array2){
    const juntos = [...array1] + [...array2];
    return juntos
}
console.log(combineTwoArrays([54,567,87524,4787],["poto","hola","Juan"]))

