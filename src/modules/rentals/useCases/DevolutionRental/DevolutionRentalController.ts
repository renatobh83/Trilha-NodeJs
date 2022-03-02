import { Request, Response } from "express";
import { container } from "tsyringe";
import { DevolutionRentalUseCase } from "./DevolutionRenatlUseCase";

class DevolutionRentaController{

    async handle (request:Request, response:Response) :Promise<Response>{
        const devolutionRentalUseCase =  container.resolve(DevolutionRentalUseCase)
        const {id: user_id} = request.user
        const {id} = request.params
       
       const rental = await devolutionRentalUseCase.execute({id,user_id})


        return response.json(rental)
        
    }
}


export {DevolutionRentaController}