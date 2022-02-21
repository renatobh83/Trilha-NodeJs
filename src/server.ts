import express from "express"
import { categoriesRoutes } from "./routes/categories"
import { specificationRoute } from "./routes/specification"

const app = express()

app.use(express.json())

app.use(categoriesRoutes)
app.use(specificationRoute)
app.get("/",(req, res)=> res.json({message: "Hello Word Get"}))




app.listen(3333,()=> console.log("Server Up"))