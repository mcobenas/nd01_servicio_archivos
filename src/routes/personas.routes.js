
import {Router} from "express"
import {createPersonas,getPersonas} from "../controllers/personas.controllers.js"

const router=Router()

router.get("/personas",getPersonas)
router.post("/personas", createPersonas)
router.put("/personas/:id")
router.delete("/personas/:id")
router.get("/personas/:id")

export default router