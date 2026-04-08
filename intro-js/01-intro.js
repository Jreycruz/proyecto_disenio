// ====== ambito global ======
console.log('Hola mundo!')
console.log("Hola JS")

// console.log(window) // ❌ si ocurre un error, el resto de contenido no se ejecuta
console.log(this) // this: hace referencia al ambito global, pero pude variar dependiendo del contexto
// console.log(globalThis) // globalThis: hace referencia al ambito global


// ======= variables =======

// let o const
// var ❌ no es recomendado de usar

// var nombre = 'Ana'

{
    let nombre = 'Juan' // alcance de bloque
    nombre = 'Pedro'

    const PI = 3.14 // constante: su valor no puede cambiar
    // PI = 2935 // ❌ error

    console.log(nombre)
    console.log(PI)


    {
        // ======= ambito de bloque (interno) =======

        nombre = 'María' // variable con alcance de bloque
        console.log(nombre)


    }

    console.log(nombre)
}