// Este archivo es donde comienza la aplicacion

import app from './app'

import { connectDB } from './connection/db.js'


import { PORT } from './config/config.js'

connectDB()

app.listen(2000)
console.log('server listen on port', PORT)