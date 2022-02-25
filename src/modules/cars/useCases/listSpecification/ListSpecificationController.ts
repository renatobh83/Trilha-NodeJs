import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";



class ListSpecificationsController {
     
    async handle(request: Request, response: Response): Promise<Response>{

        const specifications = await container.resolve(ListSpecificationUseCase).execute()
          return response.json(specifications)
    }
}



export { ListSpecificationsController}