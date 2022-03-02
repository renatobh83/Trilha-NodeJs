import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarRepository } from "../../../cars/repositories/Implementations/ICarsRepository";
import { Rentals } from "../../infra/typeorm/entities/Rentals";
import { IRentalRespository } from "../../repositories/IRentalRepository";

interface IRequest {
    id:string,
    user_id: string

}

@injectable()
class DevolutionRentalUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalRepository: IRentalRespository,
        @inject("CarsRepository") 
        private carRepository: ICarRepository,
        @inject("DayjsDateProvider")
        private dayjsDateProvider: IDateProvider
    ){}


    async execute({id, user_id}: IRequest): Promise<Rentals>{
        const rental = await this.rentalRepository.findById(id);
        const car = await this.carRepository.findById(rental.car_id)
        if(!rental){
            throw new AppError("Rentals does not exist")
        }

        let daily = this.dayjsDateProvider.compareInDays(rental.start_date, this.dayjsDateProvider.dateNow())
        
        if(daily <= 0) {
            daily = 1
        }
        const delay = this.dayjsDateProvider.compareInDays( rental.expected_return_date, this.dayjsDateProvider.dateNow())

        let total = 0
        if(delay > 0){
            const calculate_fine = delay * car.fine_amount
            total = calculate_fine
        }
        total += daily * car.daily_rate

        rental.end_date = this.dayjsDateProvider.dateNow()

        rental.total = total

        await this.rentalRepository.create(rental)
        await this.carRepository.updateAvailable(car.id, true)
      

        return rental
    }

}


export {DevolutionRentalUseCase}