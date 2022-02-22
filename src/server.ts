import express from "express"
import { router } from "./routes"
import "./database"
import "./shared/container"

const app = express()

app.use(express.json())

app.use(router)
app.get("/",(req, res)=> res.json({message: "Hello Word Get"}))




app.listen(3333,()=> console.log("Server Up"))