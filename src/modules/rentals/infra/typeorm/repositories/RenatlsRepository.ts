import { getRepository, Repository } from "typeorm";
import { ICreateRentalDTO, IRentalRespository } from "../../../repositories/IRentalRepository";
import { Rentals } from "../entities/Rentals";

class RentalsRepository implements IRentalRespository {
    private repository: Repository<Rentals>

    constructor() {
        this.repository = getRepository(Rentals)
    }
    async create({ car_id, expected_return_date, user_id }: ICreateRentalDTO): Promise<Rentals> {
      const rental = this.repository.create({
        car_id, expected_return_date, user_id
      })

      await this.repository.save(rental)
      return rental
    }


    async findOpenRentalByCar(car_id: string): Promise<Rentals> {
        const openByCar = await this.repository.findOne({ car_id })
        return openByCar
    }
    async findOpenRentalByUser(user_id: string): Promise<Rentals> {
        const openByUser = await this.repository.findOne({ user_id })
        return openByUser
    }
}


export { RentalsRepository }