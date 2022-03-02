import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserCarRentalUseCase } from "./ListUserCarRentalUseCase";

class ListUserCarRentalController {
    async handle(request:Request, response:Response):Promise<Response>{
        const listUserCarRentalUseCase = container.resolve(ListUserCarRentalUseCase)
        const {id} = request.user
        const rentals = await listUserCarRentalUseCase.execute(id)

        return response.json(rentals)
    }
}

export {ListUserCarRentalController}