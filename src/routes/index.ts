import { Router } from "express";
import { authenticateRoutes } from "./authenticate";
import { categoriesRoutes } from "./categories";
import { specificationRoute } from "./specification";
import { userRouter } from "./users";

const router = Router()



router.use(categoriesRoutes)
router.use(specificationRoute)
router.use(userRouter)
router.use(authenticateRoutes)

export { router}