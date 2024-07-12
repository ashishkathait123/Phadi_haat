import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors());

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes

import userRouter from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import shopRoutes from './routes/shop.routes.js'
import driverRoutes from './routes/driver.routes.js'
import sellerRoutes from './routes/seller.routes.js'

//routes declaration
app.use("/api/v1/user", userRouter) // Ensure this is correctly set up
app.use('/api/v1/', productRoutes);
app.use("/api/v1/",shopRoutes)
app.use('/api/v1/driver', driverRoutes);
app.use('/api/v1/seller', sellerRoutes);

export {app}