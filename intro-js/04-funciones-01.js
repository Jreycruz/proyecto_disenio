
// función o método

// tradiconal 
function saludo() {
    console.log("Hola Mundo");
    return "Hola Mundo"; //exponiendo fuera de la función
}


const message = saludo; //invocando la función

// reasignando la función
saludo = 'olii'
// message = 'aloo'

console.log(message())
console.log(saludo)


// función anónima
const saludar = function () {
    console.log("Hola Mundo Anónimo");
}

// función flecha (expresión lambda)
const saludarCorto = () => {
    return "Hola Mundo Flecha"
}

// solo se usa si hay un return 
const saludarSuperCorto = (nombre) => "Hola " + nombre + " Corto"
const saludarSuperCorto2 = (nombre) => `Hola ${nombre} Corto` // template strings


saludar() //invocando la función anónima
console.log(saludarCorto()) //invocando la función flecha
console.log(saludarSuperCorto("Juan")) //invocando la función flecha super corta
console.log(saludarSuperCorto2("Pedro")) //invocando la función flecha super corta 2



