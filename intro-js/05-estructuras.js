
const nombre = 'Juan'

const postres = [
    "Helado",
    "Pastel",
    "Galletas",
    "Fruta",
    "Flan"
]

// desestructuración 

// ... ( spread operator )
const copia_postres = [...postres]

postres.pop()
postres.pop()
postres.pop()

console.log(postres)
console.log(copia_postres)

const [primero, segundo, ...resto] = copia_postres
// const primero = copia_postres[0]
// const segundo = copia_postres[1]
// const tercero = copia_postres[2]

console.log(primero)
console.log(segundo)
console.log(resto)
console.log(copia_postres)


//objetos

const recetas = [
    {
        nombre: "Helado",
        tiempo: 30,
        ingredientes: ["leche", "azúcar", "saborizante"]
    },
    {
        nombre: "Pastel",
        tiempo: 60,
        ingredientes: ["leche", "harina", "huevos", "azúcar", "mantequilla"]
    }
]

//"helado" es un objeto
const [helado] = recetas

// se puede asignar un alias a la variable para evitar conflictos
const { nombre: nombreHelado, tiempo, ingredientes } = helado
// const nombreHelado = helado.nombre
// const tiempo = helado.tiempo
// const ingredientes = helado.ingredientes

console.log(nombreHelado)
console.log(tiempo)
console.log(ingredientes)

const user = {
    "id": 1,
    name: "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    address: {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const { address, name, id } = user
const { geo, city } = address
const { lat, lng } = geo


console.log(lat)