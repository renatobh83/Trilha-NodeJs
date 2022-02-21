import {Router} from "express"
import { CategoryRepository } from "../repositories/CategoryRepository"
import { CreateCategoryService } from "../services/CreateCategoryService"

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