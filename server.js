import express from 'express'
import { RouterTareas } from './router/tareas.js'


const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', new RouterTareas().start())

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
