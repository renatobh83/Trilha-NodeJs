import { Router } from "express";
import { categoriesRoutes } from "./categories";
import { specificationRoute } from "./specification";
import { userRouter } from "./users";

const router = Router()



router.use(categoriesRoutes)
router.use(specificationRoute)
router.use(userRouter)

export { router}