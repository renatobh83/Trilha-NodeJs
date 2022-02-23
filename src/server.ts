import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import "./shared/container"
import "./database"

import { router } from "./routes"
import { AppError } from "./erros/AppError";





const app = express()

app.use(express.json())

app.use(router)
app.get("/",(req, res)=> res.json({message: "Hello Word Get"}))


app.use((err: Error, request:Request, response: Response, next: NextFunction )=> {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })

})



app.listen(3333,()=> console.log("Server Up"))