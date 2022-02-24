import {Router} from "express"
import multer from "multer"

import { CreateCategoryController } from "../../../../modules/cars/useCases/Category/createCategory/createCategoryController"
import { ImportCategoryController } from "../../../../modules/cars/useCases/Category/importCategory/ImportCategoryController"
import { ListCategoriesController } from "../../../../modules/cars/useCases/Category/ListCategories/ListCategoriesController"

const categoriesRoutes = Router()


const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()
const createCategoryController = new CreateCategoryController()


const upload = multer({
  dest: "./tmp"
})
categoriesRoutes.post("/categories",createCategoryController.handle)

categoriesRoutes.get("/categories", listCategoriesController.handle)

categoriesRoutes.post("/categories/import",upload.single("file"), importCategoryController.handle)


export { categoriesRoutes }