import { Router } from "express";
import { CreateCarController } from "../../../../modules/cars/useCases/CreateCars/CreateCarsController";
import { CreateCarSpecificationController } from "../../../../modules/cars/useCases/CreateCarSepecification/CreateCarSpecificationController";
import { ListCarsController } from "../../../../modules/cars/useCases/ListCars/ListCarsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const carRoutes = Router()

const createCarController = new CreateCarController()
const listCarsController = new ListCarsController()
const createCarSpecificationController = new CreateCarSpecificationController()

carRoutes.post("/",ensureAuthenticated, ensureAdmin, createCarController.handle)

carRoutes.get("/available", listCarsController.handle)


carRoutes.post("/specifications/:id",ensureAuthenticated, ensureAdmin,createCarSpecificationController.handle)

export {carRoutes}