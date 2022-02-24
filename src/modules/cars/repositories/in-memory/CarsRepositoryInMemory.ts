import { Car } from "../../entities/Car";
import { ICarRepository,ICarsDTO } from "../Implementations/ICarsRepository";


class CarsRepositoryInMemory implements ICarRepository {
 

    cars: Car[] = []

   async create({ name,brand,category_id,daily_rate, description, fine_amount, license_plate}: ICarsDTO): Promise<void> {
       const car = new Car()

       Object.assign(car,{
           name, description, fine_amount, license_plate, category_id,brand,daily_rate})
        
         this.cars.push(car)
         
       }

    async findByName(name: string): Promise<Car> {
        return this.cars.find((car)=> car.name === name)
      } 
}

export {CarsRepositoryInMemory}