import {Router} from "express"
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository"
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService copy"


const specificationRoute = Router()
const specificationRepository = new SpecificationRepository()
specificationRoute.post("/specification", (req,res)=>{
    const {name, description} = req.body

    const createSpecificationService = new CreateSpecificationService(specificationRepository)

    createSpecificationService.execute({name, description})
    
    return res.status(201).send()

})


export {specificationRoute}