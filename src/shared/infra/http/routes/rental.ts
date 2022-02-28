import { Router } from "express";
import { CreateRentalController } from "../../../../modules/rentals/useCases/CreateRental/CreateRentalController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const rentalRoute = Router()
const createRentalController = new CreateRentalController()

rentalRoute.post("/",ensureAuthenticated, createRentalController.handle)


export {rentalRoute}