
const numeros = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]


// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }

// for (const [index, value] of numeros.entries()) {
//     console.log(`indice: ${index}, valor: ${value}`)
// }



// numeros.forEach(console.log)
numeros.forEach((value, index, array) => {

    if (value % 2 == 0)
        console.log(value, index, array)
})

console.log('------------------')

const nueva_lista = numeros.map((value, index, array) => {
    if (value % 2 == 0)
        return value
    // return undefined // implicitamente retorna undefined
})

console.log(nueva_lista)

const lista_dobles = numeros.map((value, index, array) => {
    return value * 2
})

console.log(lista_dobles)


const nueva_lista_2 = numeros.filter((value, index, array) => {

    if (value % 2 == 0)
        return value
})


console.log(nueva_lista_2)

const nueva_lista_3 = numeros.some((value, index, array) => {

    return value % 2 == 0
})

console.log(nueva_lista_3)

const nueva_lista_4 = numeros.every((value, index, array) => {
    return value % 2 == 0
})

console.log(nueva_lista_4)