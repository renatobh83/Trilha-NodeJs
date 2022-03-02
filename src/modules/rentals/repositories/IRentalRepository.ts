import { Rentals } from "../infra/typeorm/entities/Rentals";

interface ICreateRentalDTO {
    car_id:string
    user_id:string
    expected_return_date:Date
    id?:string
    end_date?:Date
    total?:number
}

interface IRentalRespository {
    findOpenRentalByCar(car_id: string): Promise<Rentals>
    findOpenRentalByUser(user_id: string): Promise<Rentals>
    create(data:ICreateRentalDTO):Promise<Rentals>
    findById(id:string): Promise<Rentals>

}

export {IRentalRespository, ICreateRentalDTO}