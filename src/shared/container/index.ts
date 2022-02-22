import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/repositories/I/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
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


container.registerSingleton<IUsersRepository>(
    "UsersRepository",UsersRepository
)