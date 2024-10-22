import TransaccionesRoutes from "../services/transacciones.service.js";
import TransaccionesService from "../services/transacciones.service.js"

class TransaccionesController{
    constructor(){
        this.service = new TransaccionesService()
    }

    getTransacciones = async (req, res) =>{
        const transacciones = await this.service.getTransacciones()
        res.send(transacciones)
    }

    postTransacciones = async (req, res) =>{
        console.log(req.body);
        const data = req.body
        const newTransaccion = await this.service.postTransacciones(data)
        res.send(newTransaccion)
    }

    
    getCantidad = async (req, res) => {
        const transacciones = await this.service.getTransacciones();
        res.send({ message: "Cantidad de transacciones", cantidad: transacciones.length });
    }

    deleteTransaccion = async (req, res) => {
        const { id } = req.params;
        const response = await this.service.deleteTransaccion(parseInt(id));
        res.send(response);
    }
    
    
}

export default TransaccionesController