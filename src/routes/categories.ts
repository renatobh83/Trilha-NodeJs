import {Router} from "express"
import multer from "multer"

import createCategoryController  from "../modules/cars/useCases/createCategory"
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController"
import { ListCategoriesController } from "../modules/cars/useCases/ListCategories/ListCategoriesController"

const categoriesRoutes = Router()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

const upload = multer({
  dest: "./tmp"
})
categoriesRoutes.post("/categories",(req, res)=>{
  return createCategoryController().handle(req, res)
})

categoriesRoutes.get("/categories", listCategoriesController.handle)

categoriesRoutes.post("/categories/import",upload.single("file"), importCategoryController.handle)


export { categoriesRoutes }