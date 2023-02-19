// Este archivo configura la aplicacion de express
import express from 'express'
import morgan from 'morgan'

const app = express()

import productsRoutes from './routes/products.routes'
app.use(morgan('dev')) 

app.get('/',(req,res)=>{
    res.json({
        author : "LeoSebastian",
        version : "1.0.0",
        description : "",
})
})

app.use('/products',productsRoutes)

export default app
