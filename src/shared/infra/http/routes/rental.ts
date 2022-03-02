import { Router } from "express";
import { CreateRentalController } from "../../../../modules/rentals/useCases/CreateRental/CreateRentalController";
import { DevolutionRentaController } from "../../../../modules/rentals/useCases/DevolutionRental/DevolutionRentalController";
import { ListUserCarRentalController } from "../../../../modules/rentals/useCases/ListUserCarRental/ListUserCarRentalsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const rentalRoute = Router()
const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentaController()
const listUserCarRentalController = new ListUserCarRentalController()


rentalRoute.post("/",ensureAuthenticated, createRentalController.handle)
rentalRoute.post("/devolution/:id",ensureAuthenticated, devolutionRentalController.handle)
rentalRoute.get("/user", ensureAuthenticated, listUserCarRentalController.handle)

export {rentalRoute}