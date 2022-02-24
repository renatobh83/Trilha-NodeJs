import { Car } from "../../infra/typeorm/entities/Car";
import { ICarRepository,ICarsDTO } from "../Implementations/ICarsRepository";


class CarsRepositoryInMemory implements ICarRepository {


    cars: Car[] = []

   async create({ name,brand,category_id,daily_rate, description, fine_amount, license_plate}: ICarsDTO): Promise<Car> {
       const car = new Car()

       Object.assign(car,{name, description, fine_amount, license_plate, category_id,brand,daily_rate})
        
         this.cars.push(car)
         

         return car
       }

    async findByName(name: string): Promise<Car[]> {
        return this.cars.filter((car)=> car.name === name)
      } 
      async  findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find((car)=> car.license_plate === license_plate)
      }
     
}

export {CarsRepositoryInMemory}