import { getRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";
import { ICarRepository, ICarsDTO } from "../../../repositories/Implementations/ICarsRepository";


class CarsRepository implements ICarRepository {

    private repository: Repository<Car>

    constructor() {
        this.repository = getRepository(Car)
    }
  
    async create(
        {   id,
            brand, 
            category_id, 
            daily_rate, 
            description, 
            fine_amount, 
            license_plate, 
            name ,
            specifications}: ICarsDTO): Promise<Car> {
        
        
        const car = this.repository.create(
            {
                id, 
                brand, 
                category_id, 
                daily_rate, 
                description, 
                fine_amount, 
                license_plate, 
                name,
                specifications })
        await this.repository.save(car)
    
        return car
    }
    async findByName(name: string): Promise<Car[]> {
        const cars = await this.repository.find({ name })
        return cars
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {

        const car = await this.repository.findOne({ license_plate })
        return car
    }

    async findAvaible(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
        const carsQuery =  this.repository
        .createQueryBuilder("c")
        .where("available = :available", {available: true})

        if(brand){
            carsQuery.andWhere("brand = :brand",{brand})
        }

        if(category_id){
            carsQuery.andWhere("category_id = :category_id",{category_id})
        }

        if(name){
            carsQuery.andWhere("name = :name",{name})
        }
        const cars = await carsQuery.getMany()
        return cars   
    }
    async findById(car_id: string): Promise<Car> {
        const car = await this.repository.findOne(car_id)
        return car
    }
    async updateAvailable(car_id: string, available: boolean): Promise<void> {
        await this.repository
        .createQueryBuilder()
        .update()
        .set({available})
        .where("id = :id")
        .setParameters({car_id})
        .execute()

    }
 

}


export { CarsRepository }