import express  from "express";
import personasRoutes from "./routes/personas.routes.js"

const app=express();
app.use(personasRoutes)

export default app
