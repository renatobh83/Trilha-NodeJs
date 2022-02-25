import { Router } from "express";
import { CreateCarController } from "../../../../modules/cars/useCases/Cars/CreateCars/CreateCarsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const carRoutes = Router()

const createCarController = new CreateCarController()


carRoutes.post("/",ensureAuthenticated, ensureAdmin, createCarController.handle)

export {carRoutes}