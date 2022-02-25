import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCarUseCase } from "./ListCarsUseCase";

class ListCarsController {


    async handle(request:Request, response:Response): Promise<Response>{
        const {brand, category_id, name} = request.query
        
        const lisCarsUseCase = container.resolve(ListCarUseCase)

        const all = await lisCarsUseCase.execute({
            brand: brand as string,
            name: name as string,
            category_id: category_id as string
        })
 
        return response.json(all)
    }
}


export {ListCarsController}