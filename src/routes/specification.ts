import {Router} from "express"
import { ensureAuthenticated } from "../middwares/ensureAuthenticate"

import { CreateSpecificationController } from "../modules/cars/useCases/Spectification/createSpecifitaion/CreateSpecifictionController"
import { ListSpecificationsController } from "../modules/cars/useCases/Spectification/listSpecification/ListSpecificationController"



const specificationRoute = Router()
const createSpecifitionController = new CreateSpecificationController()
const listCategoriesController = new ListSpecificationsController()

specificationRoute.post("/specification", createSpecifitionController.handle)
specificationRoute.get("/specification", ensureAuthenticated, listCategoriesController.handle)

export {specificationRoute}