import { getRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";
import { ICarRepository, ICarsDTO } from "../../../repositories/Implementations/ICarsRepository";


class CarsRepository implements ICarRepository {

    private repository: Repository<Car>

    constructor(){
        this.repository =  getRepository(Car)
    }

    async create({brand,category_id,daily_rate,description,fine_amount,license_plate,name}: ICarsDTO): Promise<Car> {
        const car =  this.repository.create({brand,category_id,daily_rate,description,fine_amount,license_plate,name})
        await this.repository.save(car)
        return car
    }
   async findByName(name: string): Promise<Car[]> {
        const cars = await this.repository.find({name})
        return cars
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        
        const car = await this.repository.findOne({license_plate})
        return car
    }
}


export {CarsRepository}