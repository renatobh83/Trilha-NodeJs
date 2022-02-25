import { inject, injectable } from "tsyringe";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarRepository } from "../../repositories/Implementations/ICarsRepository";


interface IRequest {
    category_id?: string,
    name?: string,
    brand?: string
}
@injectable()
class ListCarUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepositoy: ICarRepository){}

    async execute({brand,category_id,name}: IRequest): Promise<Car[]> {
        const cars =  await this.carsRepositoy.findAvaible(brand, category_id,name)
        
        return cars
    }
}


export { ListCarUseCase}