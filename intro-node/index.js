import { createServer } from 'node:http'

// la instancia del servidor
const server = createServer((req, res) => {

    console.log(req.method)
    console.log(req.url)

    switch (req.method) {

        case 'GET':
            switch (req.url) {
                case '/':
                    res.write('<h1>Hola mundo</h1>') // texto plano
                    res.end()
                    break
                case '/users':
                    res.write('Lista de usuarios')
                    res.end()
                    break
                case '/products':
                    res.write('Lista de productos')
                    res.end()
                    break
                default:
                    res.write('Ruta no encontrada')
                    res.end()
            }
            break
        case 'POST':
            switch (req.url) {
                case '/users':
                    res.write('Crear un nuevo usuario')
                    res.end()
                    break
                case '/products':
                    res.write('Crear un nuevo producto')
                    res.end()
                    break
                default:
                    res.write('Ruta no encontrada')
                    res.end()
            }
        default:
            res.write('Método no permitido')
            res.end()

    }
})

// definir un puerto
const PORT = 3001 // 1- 65535

// empezar a escuchar el puerto
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})