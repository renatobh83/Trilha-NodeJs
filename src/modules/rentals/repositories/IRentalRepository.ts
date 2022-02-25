import { Rentals } from "../infra/typeorm/entities/Rentals";

interface ICreateRentalDTO {
    car_id:string
    user_id:string
    expected_return_date:Date
}

interface IRentalRespository {
    findOpenRentalByCar(car_id: string): Promise<Rentals>
    findOpenRentalByUser(user_id: string): Promise<Rentals>
    create(data:ICreateRentalDTO):Promise<Rentals>

}

export {IRentalRespository, ICreateRentalDTO}