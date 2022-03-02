import { inject, injectable } from "tsyringe";
import { Rentals } from "../../infra/typeorm/entities/Rentals";
import { IRentalRespository } from "../../repositories/IRentalRepository";

@injectable()
class ListUserCarRentalUseCase {
    	
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository:IRentalRespository
    ){}

    async execute(user_id:string): Promise<Rentals[]>{
        const rentals = await this.rentalsRepository.findByUser(user_id)

        return rentals
    }
}

export {ListUserCarRentalUseCase}