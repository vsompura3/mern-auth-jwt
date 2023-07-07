import dotenv from 'dotenv'
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()
const PORT = process.env.PORT || 8080
dotenv.config()

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/api/users', userRoutes)
app.get('/', (req, res) => res.send('running'))

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
