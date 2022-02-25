import { Router } from "express";
import multer from "multer";
import { CreateCarController } from "../../../../modules/cars/useCases/CreateCars/CreateCarsController";
import { CreateCarSpecificationController } from "../../../../modules/cars/useCases/CreateCarSepecification/CreateCarSpecificationController";
import { ListCarsController } from "../../../../modules/cars/useCases/ListCars/ListCarsController";
import { UploadCarImageController } from "../../../../modules/cars/useCases/uploadCarImage/UploadCarImageController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import uploadConfig from "../../../../config/upload";
const carRoutes = Router()

const createCarController = new CreateCarController()
const listCarsController = new ListCarsController()
const createCarSpecificationController = new CreateCarSpecificationController()
const uploadCarImageController = new UploadCarImageController()

const uploadCarImage = multer(uploadConfig.upload("./tmp/cars"))


carRoutes.post("/",ensureAuthenticated, ensureAdmin, createCarController.handle)
carRoutes.get("/available", listCarsController.handle)
carRoutes.post("/specifications/:id",ensureAuthenticated, ensureAdmin,createCarSpecificationController.handle)
carRoutes.post("/images/:id",ensureAuthenticated, ensureAdmin , uploadCarImage.array("images")  ,uploadCarImageController.handle)

export {carRoutes}