
import { pool } from "../pg.js";

// get all
export const getAllDeportes = async(req, res)=>{

    const {rows} = await pool.query('SELECT * FROM futbol')
    res.json(rows)

}


// post 
export const postDeportes = async(req,res)=>{

    const {nombre, fanaticos} = req.body

    await pool.query('INSERT INTO futbol (nombre, fanaticos) values($1, $2)', [nombre, fanaticos])
    res.json({"message": "Guardado!!!"})

}


// get one
export const getOneDeportes = async(req,res)=>{

    const {id} = req.params

    const {rows} = await pool.query('SELECT * FROM futbol WHERE id=$1', [id])
    res.json(rows)

}

// delete 
export const deleteDeportes = async(req,res)=>{

    const {id} = req.params

    await pool.query('DELETE from futbol WHERE id=$1', [id])
    res.json({"message": "Eliminado!!!"})

}


// update 
export const updateDeportes = async(req, res)=>{

    const {id} = req.params
    const {nombre, fanaticos} = req.body

    await pool.query('UPDATE futbol SET nombre=$1, fanaticos=$2 WHERE id=$3', [nombre, fanaticos, id])
    res.json({"message": "Actualizado !!!"})

}