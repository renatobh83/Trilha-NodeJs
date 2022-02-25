import { getRepository, Repository } from "typeorm";
import { ICreateRentalDTO, IRentalRespository } from "../../../repositories/IRentalRepository";
import { Rentals } from "../entities/Rentals";

class RentalsRepository implements IRentalRespository {
    private repository: Repository<Rentals>

    constructor(){
        this.repository = getRepository(Rentals)
    }
    create({car_id,expected_return_date,user_id}: ICreateRentalDTO): Promise<Rentals> {
        throw new Error("Method not implemented.");
    }


    findOpenRentalByCar(car_id: string): Promise<Rentals> {
        throw new Error("Method not implemented.");
    }
    findOpenRentalByUser(user_id: string): Promise<Rentals> {
        throw new Error("Method not implemented.");
    }
}


export {RentalsRepository}