class ModelTareas {


    mensajeHora = async () => {
        let resultado = {mensaje: ''}
        try{
            let hora = new Date().toLocaleTimeString()

            if(hora >= "06:00:00" && hora <= "12:00:00") resultado.mensaje = "Buenos dias!"
            else if (hora >= "13:00:00" && hora <= "19:00:00") resultado.mensaje = "Buenas tardes!"
            else if ( (hora >= "20:00:00" && hora <= "24:00:00") || (hora >= "00:00:00" && hora <= "05:00:00") ) resultado.mensaje = "Buenas noches!"

        }
        catch {
            return []
        }
        return resultado
    }


    calcularRandom = async () => {
        let resultado = {}
        let max = 21
        let min = 1 
        try{
            for(let i = 0; i < 1000; i++){ 
                let number = Math.floor(Math.random() * (max - min) + min);
                if(resultado[number] == null) resultado[number] = 1
                else resultado[number] = resultado[number] + 1
                //Object.assign(resultado, {number: resultado.get(number)++} )
            }
        }
        catch {
            return []
        }
        return resultado
    }

    calcularOperaciones = async (query) => {
        let numero1
        let numero2
        let error = {error: 
            {
                num1: {valor: query.num1, tipo: typeof query.num1}, 
                num2: {valor: query.num2, tipo: typeof query.num2}, 
                operacion: {valor: query.operacion, tipo: typeof query.operacion}
            }
        }
        try{
            numero1 = parseInt(query.num1)
            numero2 = parseInt(query.num2)
            
            if(isNaN(numero1) || isNaN(numero2)) return error

            if(query.operacion == "suma"){
                query.resultado = numero1 + numero2
            } else if (query.operacion == "resta") {
                query.resultado = numero1 - numero2
            } else if (query.operacion == "multiplicacion") {
                query.resultado = numero1 * numero2
            } else if (query.operacion == "division") {
                query.resultado = numero1 / numero2
            } else {
                return error
            }
        }
        catch {
            return error
        }
        return query
    }

}

export default ModelTareas