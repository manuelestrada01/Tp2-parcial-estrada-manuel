import Factory from "../models/Factory.js";

class TransaccionesService {
    constructor() {
        this.model = Factory.get("");
    }

    getTransacciones = async () => {
        const transacciones = await this.model.getTransacciones();
        return transacciones;
    }

    postTransacciones = async (data) => {
        const newTransacciones = await this.model.postTransacciones(data);
        return newTransacciones;
    }


    getCantidad = async () => {
        return await this.model.getCantidad();
    }

    deleteTransaccion = async (id) => {
        return await this.model.deleteTransaccion(id);
    }
}

export default TransaccionesService;
