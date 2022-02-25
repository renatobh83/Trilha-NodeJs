import { Car } from "../../infra/typeorm/entities/Car";
import { ICarRepository, ICarsDTO } from "../Implementations/ICarsRepository";


class CarsRepositoryInMemory implements ICarRepository {


  cars: Car[] = []

  async create({ name, brand, category_id, daily_rate, description, fine_amount, license_plate }: ICarsDTO): Promise<Car> {
    const car = new Car()

    Object.assign(car, { name, description, fine_amount, license_plate, category_id, brand, daily_rate })

    this.cars.push(car)


    return car
  }

  async findByName(name: string): Promise<Car[]> {
    return this.cars.filter((car) => car.name === name)
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate)
  }
  async findAvaible(brand?:string,category_id?:string,name?:string): Promise<Car[]> {
  
    const cars = this.cars
    .filter(car =>{
     
      if(
        car.available === true ||
        (brand && car.brand === brand) || 
        (category_id && car.category_id === category_id) || 
        (name && car.name === name)
    ) {
    
      return car
    }
    return null
      })
    
      return cars
  }

}

export { CarsRepositoryInMemory }