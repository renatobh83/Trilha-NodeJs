import {Router} from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate"

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecifitaion/CreateSpecifictionController"
import { ListSpecificationsController } from "../../../../modules/cars/useCases/listSpecification/ListSpecificationController"



const specificationRoute = Router()
const createSpecifitionController = new CreateSpecificationController()
const listCategoriesController = new ListSpecificationsController()

specificationRoute.post("/specification", createSpecifitionController.handle)
specificationRoute.get("/specification", ensureAuthenticated, listCategoriesController.handle)

export {specificationRoute}