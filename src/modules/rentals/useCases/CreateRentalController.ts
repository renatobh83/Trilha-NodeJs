import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

class CreateRentalController {

    async handle(request:Request, response:Response): Promise<Response> {
        const createRentalUseCase = container.resolve(CreateRentalUseCase)

        return response.json()
    }
}



export {CreateRentalController}