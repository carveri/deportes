import { Router } from "express";
import { deleteDeportes, getAllDeportes, getOneDeportes, postDeportes, updateDeportes } from "../controllers/futbol.controller.js";

const router = Router()


router.get('/futbol', getAllDeportes)
router.post('/futbol', postDeportes)
router.get('/futbol/:id', getOneDeportes)
router.delete('/futbol/:id', deleteDeportes)
router.put('/futbol/:id', updateDeportes)


export default router;