

const miPromesa = (n1, n2) => {
    // resolve y reject son referencias a funciones
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const random = Math.random()// devuelve un numero aleatorio entre 0 y 1

            const result = n1 + n2

            if (random > 0.5)
                resolve(result)
            else
                reject('Ocurrió un error al realizar la suma')

        }, 3000)

    })
}
console.log('Antes de ejecutar la promesa')
console.log('ejecutando promesa 1')
miPromesa(5, 10)
    // se ejecuta cuando se resuelve la promesa y unicamente si se resuelve correctamente
    .then((value) => {
        console.log('El resultado es: ' + value)
    })
    // se ejecuta cuando se rechaza la promesa
    .catch((error) => {
        console.log('Error: ' + error)
    })
    // se ejecuta siempre, sin importar si se resolvió o se rechazó la promesa
    .finally(() => {
        console.log('La promesa ha finalizado')
    })

console.log('ejecutando promesa 2')
miPromesa(25, 10)
    // se ejecuta cuando se resuelve la promesa y unicamente si se resuelve correctamente
    .then((value) => {
        console.log('El resultado es: ' + value)
    })
    // se ejecuta cuando se rechaza la promesa
    .catch((error) => {
        console.log('Error: ' + error)
    })
    // se ejecuta siempre, sin importar si se resolvió o se rechazó la promesa
    .finally(() => {
        console.log('La promesa ha finalizado')
    })

console.log('Después de ejecutar la promesa')