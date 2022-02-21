import {Router} from "express"
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository"
import { createCategoryController } from "../modules/cars/useCases/createCategory"


const specificationRoute = Router()
const specificationRepository = new SpecificationRepository()
specificationRoute.post("/specification", (req,res)=>{
   return createCategoryController.handle(req,res)

})


export {specificationRoute}