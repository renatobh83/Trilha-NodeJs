import {Router} from "express"
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifitaion/CreateSpecifictionController"



const specificationRoute = Router()
const createSpecifitionController = new CreateSpecificationController()


specificationRoute.post("/specification", createSpecifitionController.handle)


export {specificationRoute}