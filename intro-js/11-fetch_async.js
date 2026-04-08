// fetch -> una API de JS, para consumir recursos de internet.

const URL = 'https://jsonplaceholder.typicode.com/users/1rw'

console.log('realizando la petición')

let user = {}
try {

    const response = await fetch(URL) // instancia de la clase Response

    if (!response.ok) throw 'error al obtener el usuario'

    const data = await response.json()
    user = { ...data }

} catch {
    console.log('error al hacer la peticion')
}

console.log(user)