import express from "express"
import { router } from "./routes"
import { categoriesRoutes } from "./routes/categories"
import { specificationRoute } from "./routes/specification"

const app = express()

app.use(express.json())

app.use(router)
app.get("/",(req, res)=> res.json({message: "Hello Word Get"}))




app.listen(3333,()=> console.log("Server Up"))