// Este archivo configura la aplicacion de express
import express from 'express'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(morgan('dev')) 
// middlewares
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

// routes
app.use(productsRoutes)
app.use(authRoutes)

app.get('/',(req,res)=>{
    res.json({
        author : "LeoSebastian",
        version : "1.0.0",
        description : "",
})
})

export default app
