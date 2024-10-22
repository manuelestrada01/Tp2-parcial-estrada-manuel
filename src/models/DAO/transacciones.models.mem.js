class TransaccionesMemModel {
    constructor() {
        this.transacciones = [
            {id: 1 ,tipo: "retiro", monto: 1000, destinatario: "Juan Perez"},
            {id: 2 ,tipo: "deposito", monto: 850, destinatario: "Valen Rama"}
        ];
    }

    getTransacciones = async () => {
        return this.transacciones;
    }

    postTransacciones = async (data) =>{
        data.id = this.transacciones[this.transacciones.length - 1].id + 1
        this.transacciones.push(data)
        return data
    }

    

    getCantidad = async () => {
        const Transacciones = await this.getTransacciones();
        return  Transacciones.length;
    }

    deleteTransaccion = async (id) => {
        const index = this.transacciones.findIndex(trans => trans.id === id);
        if (index !== -1) {
            this.transacciones.splice(index, 1);
            return { message: "Transacción eliminada exitosamente." };
        } else {
            return { message: "Transacción no encontrada." };
        }
    }
}

export default TransaccionesMemModel;