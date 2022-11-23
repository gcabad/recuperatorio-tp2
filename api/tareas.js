import ModelTareas from '../model/tareas.js'

class ApiTareas {
    constructor() {
        this.modelTareas = new ModelTareas()
    }
    
    obtenerMensajeHora = async () => {
        return await this.modelTareas.mensajeHora()
    }
    
    obtenerRandom  = async () => {
        return await this.modelTareas.calcularRandom()
    }
    
    obtenerOperaciones = async (operacion) => {
        return await this.modelTareas.calcularOperaciones(operacion)
    }
}
    
export default ApiTareas