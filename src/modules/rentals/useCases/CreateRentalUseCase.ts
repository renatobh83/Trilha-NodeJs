import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Rentals } from "../infra/typeorm/entities/Rentals";
import { IRentalRespository } from "../repositories/IRentalRepository";
import dayjs from "dayjs"
import { IDateProvider } from "../../../shared/container/providers/DateProvider/IDateProvider";
interface IRequest {
    user_id: string
    car_id: string
    expected_return_date: Date
}


@injectable()
class CreateRentalUseCase {

    constructor(
        @inject("RentalsRepository")
        private rentalsReposity: IRentalRespository,
        private dateProvider: IDateProvider
    ) { }


    async execute({ car_id, expected_return_date, user_id }: IRequest): Promise<Rentals> {
        const rentalHoursMin = 24
        const carUnAvailable = await this.rentalsReposity.findOpenRentalByCar(car_id)

        if (carUnAvailable) {
            throw new AppError("Car is not available")
        }

        const rentalOpenToUser = await this.rentalsReposity.findOpenRentalByUser(user_id)

        if (rentalOpenToUser) {
            throw new AppError("There is a rental in progressa for user")
        }


        const dateNow = this.dateProvider.dateNow()
        const compare = this.dateProvider.comrpareInHours( dateNow,expected_return_date)

        if (compare < rentalHoursMin) {
            throw new AppError("Invalid return time")
        }

        const rental = await this.rentalsReposity.create({
            user_id,
            car_id, expected_return_date
        })

        return rental
    }
}



export { CreateRentalUseCase }