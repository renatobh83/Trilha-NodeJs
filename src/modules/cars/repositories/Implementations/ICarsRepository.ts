import { Car } from "../../infra/typeorm/entities/Car";
import { Specification } from "../../infra/typeorm/entities/Specification";

interface ICarsDTO{
    name:string
    description:string
    daily_rate:number
    license_plate:string
    fine_amount:number
    brand: string
    category_id: string
    specifications?: Specification[]
    id?:string 
}

interface ICarRepository {
     create(data:ICarsDTO): Promise<Car>
     findByName(name:string): Promise<Car[]>
     findByLicensePlate(license_plate:string): Promise<Car>
     findAvaible(brand?:string,category_id?:string,name?:string): Promise<Car[]>
     findById(car_id:string): Promise<Car>
     updateAvailable(car_id:string, available:boolean): Promise<void>
}

export { ICarRepository, ICarsDTO}