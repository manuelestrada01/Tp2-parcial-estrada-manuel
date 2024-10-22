import TransaccionesMemModel from "../models/DAO/transacciones.models.mem.js"

class Factory{
    static get(persistencia){
        switch(persistencia){
            case "MEM":
                console.warn("Persistencia en la memoria del servidor")
                return new TransaccionesMemModel()

            default: 
            console.warn("Persistencia en default")
            return new TransaccionesMemModel()
        }
    }
}

export default Factory