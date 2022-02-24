import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarsUseCase } from "./CreateCarsUseCase";

class CreateCarController {
    async handle (request:Request, response:Response): Promise<Response> {
        const {brand,category_id,daily_rate,description,fine_amount,license_plate,name} = request.body
        const createCarUseCase = container.resolve(CreateCarsUseCase)

        const car = await createCarUseCase.execute({brand,category_id,daily_rate,description,fine_amount,license_plate,name})        

        return response.status(201).json(car)
    }


}



export {CreateCarController}