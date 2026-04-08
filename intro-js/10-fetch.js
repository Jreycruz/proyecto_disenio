// fetch -> una API de JS, para consumir recursos de internet.

const URL = 'https://jsonplaceholder.typicode.com/users/1'

console.log('realizando la petición')

let user = {}

fetch(URL)
    .then((response) => {

        if (!response.ok) throw 'Error al obtener el usuario ' + response.statusText // generando una excepción

        return response.json()
    })
    .then((data) => {

        user = { ...data }
        console.log(data)
        console.log(user)

    }).catch((error) => {
        console.log(error)
    })

console.log('fuera del then')
console.log(user)