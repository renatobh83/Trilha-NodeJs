import { container } from "tsyringe";
import { CategoryRepository } from "../../modules/cars/repositories/CategoryRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/Implementations/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/Implementations/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/SpecificationRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoryRepository",CategoryRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",SpecificationRepository
)