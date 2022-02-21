import {Router} from "express"
import multer from "multer"

import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { importCategoryController } from "../modules/cars/useCases/importCategory"
import { listCategoriesController } from "../modules/cars/useCases/ListCategories"

const categoriesRoutes = Router()


const upload = multer({
  dest: "./tmp"
})
categoriesRoutes.post("/categories",(req, res)=>{
  return createCategoryController.handle(req, res)
})


categoriesRoutes.get("/categories",(req,res)=>{
 return listCategoriesController.handle(req,res)
})

categoriesRoutes.post("/categories/import",upload.single("file"), (request, response)=>{
  return importCategoryController.handle(request, response)

})


export { categoriesRoutes }