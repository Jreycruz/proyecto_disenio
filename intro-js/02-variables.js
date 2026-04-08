let nombre = 'Juan' // string
nombre = 124 // number
console.log(nombre)

//estrcutura de datos
const numeros = [1, 2, 3, 4, 5]

// numeros = 'juan'
numeros.push(6)
numeros.unshift(7)

console.log(numeros)

numeros.pop() // elimina el ultimo elemento
numeros.shift() // elimina el primer elemento

console.log(numeros[3])


const edad = 5

const mascota = {
    nombre: 'Apolo',
    edad: edad
}

//modifica la propiedad
mascota.nombre = 'Firulais'
mascota.edad = 3

// elimina la propiedad
delete mascota.edad

// si la propiedad no existe, se crea
mascota.edad = 4
mascota.raza = 'Terrier'

console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota)