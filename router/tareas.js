import express from 'express'
import ControladorTareas from '../controller/tareas.js'

export class RouterTareas {
    constructor() {
        this.router = express.Router()
        this.ControladorTareas = new ControladorTareas()
    }

    start() {
        /* GET Home */
        this.router.get('/', this.ControladorTareas.getHome)

        /* GET Random */
        this.router.get('/random', this.ControladorTareas.getRandom)

        /* GET Operaciones */
        this.router.get('/operaciones', this.ControladorTareas.getOperaciones)

        return this.router
    }
}
