import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../shared/errors/AppError";
import { Car } from "../../../infra/typeorm/entities/Car";
import { ICarRepository } from "../../../repositories/Implementations/ICarsRepository";

interface IRequest {
    name:string
    description:string
    daily_rate:number
    license_plate:string
    fine_amount:number
    brand: string
    category_id: string
}

@injectable()
class CreateCarsUseCase{
    constructor(@inject("CarsRepository") private carsRepository:ICarRepository){}

    async execute({brand,category_id,daily_rate,description,fine_amount,license_plate,name}:IRequest): Promise<Car> {
        const carAlereadyExists =  await this.carsRepository.findByLicensePlate(license_plate)
        console.log(carAlereadyExists)
        if(carAlereadyExists) {
            throw new AppError("Is License plate alearead exists")
        }
        const car = this.carsRepository.create({ brand, category_id, daily_rate,description,fine_amount,license_plate, name})
        
        return car

    }
}


export {CreateCarsUseCase}