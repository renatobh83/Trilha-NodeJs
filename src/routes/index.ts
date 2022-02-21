import { Router } from "express";
import { categoriesRoutes } from "./categories";
import { specificationRoute } from "./specification";

const router = Router()



router.use(categoriesRoutes)
router.use(specificationRoute)


export { router}