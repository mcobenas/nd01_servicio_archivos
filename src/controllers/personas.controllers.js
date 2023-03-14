
import {Persona} from "../models/Persona.js"

export const getPersonas = (req,res) => {
    res.send("getting personas")
}

export const createPersonas = async (req,res) => {
    //console.log(req.body)
    const { Nombre,ApelliPaterno,ApelliMaterno,
        FechRegistro,UsuarioRegistro,MaquinaRegistro,IPRegistro}=req.body

    const NuevaPersona= await Persona.create({
        Nombre,
        ApelliPaterno,
        ApelliMaterno,
        FechRegistro,
        UsuarioRegistro,
        MaquinaRegistro,
        IPRegistro
    })

    console.log(NuevaPersona)

    res.send("creatting personas")
}