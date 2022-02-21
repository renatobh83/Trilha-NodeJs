import {Router} from "express"
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository"
import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { listCategoriesController } from "../modules/cars/useCases/ListCategories"

const categoriesRoutes = Router()



categoriesRoutes.post("/categories",(req, res)=>{
  return createCategoryController.handle(req, res)
})


categoriesRoutes.get("/categories",(req,res)=>{

     return listCategoriesController.handle(req,res)
})

export { categoriesRoutes }