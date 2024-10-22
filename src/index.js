import express from "express"
import TransaccionesRoutes from "./routes/transacciones.routes.js"

const app = express()
const PORT = 8090

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new TransaccionesRoutes().start())

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("ERROR", (err) => console.error(err))