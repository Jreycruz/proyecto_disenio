
// const crearMascota = (nombre, raza, edad, vacunas = []) => {
//     return {
//         nombre: nombre,
//         edad: edad,
//         raza: raza,
//         vacunas: vacunas
//     }
// }

const data = {
    nombreMascota: 'Apolo',
    edad: 5,
    raza: 'Terrier',
    vacunas: ['Rabia', 'Parvovirus']
}

// const { nombre, raza, edad, vacunas = [] } = data

// espera que se envie por parametro un objeto
const crearMascota = ({ nombreMascota, raza, vacunas = 'sin vacunas', edad }) => ({
    nombre: nombreMascota,
    edad,
    raza,
    vacunas: vacunas || []
})


const miMascota = crearMascota(data)
const otraMascota = crearMascota({ edad: 5, foo: 'bar', nombreMascota: "Siames", raza: "Michi", vacunas: ['Leucemia'] })

console.log(miMascota)
console.log(otraMascota)












const sumar = (a, b) => ({ r: a + b }) // return implícito

const sumar2 = function (a, b) {
    return a + b
}

const sumar3 = (a, b) => {

    console.log(a + b)
}


console.log(sumar(5, 10))