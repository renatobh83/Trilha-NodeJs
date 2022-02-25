import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";



class CreateCarSpecificationController {
    async handle(request:Request, response:Response): Promise<Response> {
        const { id: car_id } = request.params
        const { specification_id} = request.body
        const createCarSpecificationController = container.resolve(CreateCarSpecificationUseCase)

       const cars = await createCarSpecificationController.execute(
            {car_id, specification_id}
        )
    


        return response.json(cars)
    }
}


export { CreateCarSpecificationController}