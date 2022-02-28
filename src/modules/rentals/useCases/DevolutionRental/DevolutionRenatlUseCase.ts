import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarRepository } from "../../../cars/repositories/Implementations/ICarsRepository";
import { IRentalRespository } from "../../repositories/IRentalRepository";

interface IRequest {
    id:string,
    user_id: string

}

@injectable()
class DevolutionRentalUseCase {
    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRespository,
        @inject("CarRepository") 
        private carRepository: ICarRepository,
        @inject("DayjsDateProvider")
        private dayjsDateProvider: IDateProvider
    ){}


    async execute({id, user_id}: IRequest): Promise<void>{
        const rental = await this.rentalRepository.findById(id);

        if(!rental){
            throw new AppError("Rentals does not exist")
        }

        const dateNow = this.dayjsDateProvider.dateNow();

        const compare = this.dayjsDateProvider.compareInHours(dateNow, rental.expected_return_date)

      
    }

}


export {DevolutionRentalUseCase}