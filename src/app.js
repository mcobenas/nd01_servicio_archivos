import express  from "express";
import personasRoutes from "./routes/personas.routes.js"

const app=express();

//se adiciona algunos middlewares
app.use(express.json())  //este sirve para interpretar las cadenas json

//se adiciona rutas
app.use(personasRoutes)

export default app
