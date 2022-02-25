import { Router } from "express";
import { authenticateRoutes } from "./authenticate";
import { carRoutes } from "./car";
import { categoriesRoutes } from "./categories";
import { rentalRoute } from "./rental";
import { specificationRoute } from "./specification";
import { userRouter } from "./users";

const router = Router()



router.use(categoriesRoutes)
router.use(specificationRoute)
router.use("/users", userRouter)
router.use("/cars", carRoutes)
router.use("/rentals",rentalRoute)
router.use(authenticateRoutes)

export { router}