import { Car } from "../../infra/typeorm/entities/Car";

interface ICarsDTO{
    name:string
    description:string
    daily_rate:number
    license_plate:string
    fine_amount:number
    brand: string
    category_id: string
}

interface ICarRepository {
     create(data:ICarsDTO): Promise<Car>
     findByName(name:string): Promise<Car[]>
     findByLicensePlate(license_plate:string): Promise<Car>
}

export { ICarRepository, ICarsDTO}