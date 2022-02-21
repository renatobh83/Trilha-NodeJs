import {Router} from "express"
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository"
import { CreateCategoryService } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase"

const categoriesRoutes = Router()


const categoriesRepository = new CategoryRepository()

categoriesRoutes.post("/categories",(req, res)=>{
    const {name, description} = req.body
  
    const createCategorieService = new CreateCategoryService(categoriesRepository)  
    createCategorieService.execute({name, description})
    return res.status(201).json({message:"Criada"})

})


categoriesRoutes.get("/categories",(req,res)=>{
     const all = categoriesRepository.list()

     res.json({message: all})
})

export { categoriesRoutes }