import express from "express"

import "reflect-metadata";
import "./shared/container"
import "./database"

import { router } from "./routes"





const app = express()

app.use(express.json())

app.use(router)
app.get("/",(req, res)=> res.json({message: "Hello Word Get"}))




app.listen(3333,()=> console.log("Server Up"))