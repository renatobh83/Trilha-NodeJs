import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { Car } from "../../infra/typeorm/entities/Car"

import { ICarRepository } from "../../repositories/Implementations/ICarsRepository"
import { ISpecificationRepository } from "../../repositories/Implementations/ISpecificationRepository"

interface IRequest{

    car_id: string,
    specification_id: string[]
}

@injectable()
class CreateCarSpecificationUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarRepository,
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ){}

    async execute({car_id,specification_id}: IRequest):Promise<Car>{

        const carExists = await this.carsRepository.findById(car_id)

        if(!carExists){
            throw new AppError("Car does not exists")
        }

        const specifications = await this.specificationRepository.findByIds(specification_id)

        carExists.specifications = specifications
  
        await this.carsRepository.create(carExists)

        return carExists
    }
}



export { CreateCarSpecificationUseCase}