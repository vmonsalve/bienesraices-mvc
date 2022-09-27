import express from "express"
import { formularioLogin, formularioRegistro, formularioOlvidePassowrd } from "../controllers/usuarioController.js"
const router = express.Router()

router.get('/login', formularioLogin)
router.get('/registro', formularioRegistro)
router.get('/olvide-password', formularioOlvidePassowrd)
export default router