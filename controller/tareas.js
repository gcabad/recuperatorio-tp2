import ApiTareas from '../api/tareas.js'

class ControladorTareas {

    constructor() {
        this.apiTareas = new ApiTareas()
    }
    
    getHome = async (req,res) => {
        res.json(await this.apiTareas.obtenerMensajeHora() )
    }
    
    getRandom = async (req,res) => {
        res.json(await this.apiTareas.obtenerRandom())
    }
    
    getOperaciones = async (req,res) => {
        let operacion = req.query
        res.json(await this.apiTareas.obtenerOperaciones(operacion))
    }

}

export default ControladorTareas