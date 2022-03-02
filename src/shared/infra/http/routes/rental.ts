import { Router } from "express";
import { CreateRentalController } from "../../../../modules/rentals/useCases/CreateRental/CreateRentalController";
import { DevolutionRentaController } from "../../../../modules/rentals/useCases/DevolutionRental/DevolutionRentalController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const rentalRoute = Router()
const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentaController()

rentalRoute.post("/",ensureAuthenticated, createRentalController.handle)
rentalRoute.post("/devolution/:id",ensureAuthenticated, devolutionRentalController.handle)


export {rentalRoute}