import TransaccionesController from "../controllers/transacciones.controller.js"
import express from "express"

class TransaccionesRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new TransaccionesController()
    }

    start(){
    
        this.router.post("/transacciones", this.controller.postTransacciones)
        this.router.get("/transacciones", this.controller.getTransacciones)
        this.router.get("/cantidad", this.controller.getCantidad)
        this.router.delete("/transacciones/:id", this.controller.deleteTransaccion);
    
        return this.router
    }
}

export default TransaccionesRoutes