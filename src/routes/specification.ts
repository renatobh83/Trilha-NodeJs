import {Router} from "express"
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository"
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifitaion/CreateSpecifictionController"



const specificationRoute = Router()
const createSpecifitionController = new CreateSpecificationController()

const specificationRepository = new SpecificationRepository()
specificationRoute.post("/specification", createSpecifitionController.handle)


export {specificationRoute}