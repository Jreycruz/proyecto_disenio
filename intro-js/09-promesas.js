
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

// resolver de forma sincrona async / await

console.log('Iniciando la promesa')
try {
    const result = await miPromesa(5, 10) // si no falla, retorna el resultado que se está resolviendo
    console.log('El resultado de la suma es:', result)
} catch (error) {
    console.log('Error:', error)
}

try {
    const result2 = await miPromesa(25, 10) // si no falla, retorna el resultado que se está resolviendo
    console.log('El resultado de la segunda suma es:', result2)
} catch (error) {
    console.log('Error:', error)
}

console.log('promesa finalizada')


const resolverPromesas = async () => {
    const result = await miPromesa(5, 10)
    const result2 = await miPromesa(25, 10)

    console.log('El resultado de la suma es:', result)
    console.log('El resultado de la segunda suma es:', result2)
}

console.log(resolverPromesas())


Promise.all([
    miPromesa(5, 10),
    miPromesa(25, 10)
]).then((results) => {
    console.log(results)
}).catch((error) => {
    console.log('Error:', error)
})


Promise.allSettled([
    miPromesa(5, 10),
    miPromesa(25, 10)
]).then((results) => {
    console.log(results)
}).catch((error) => {
    console.log('Error:', error)
})
