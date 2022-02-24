import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRespository";
import { CategoryRepository } from "../../modules/cars/infra/typeorm/repositories/CategoryRepository";
import { ICarRepository } from "../../modules/cars/repositories/Implementations/ICarsRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/Implementations/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/Implementations/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoryRepository",CategoryRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",SpecificationRepository
)


container.registerSingleton<IUsersRepository>(
    "UsersRepository",UsersRepository
)

container.registerSingleton<ICarRepository>(
    "CarsRepository",CarsRepository
)