import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController{

    constructor(private listCategoriesUseCase: ListCategoriesUseCase){ }

    handle(request:Request, response:Response){
        const all = this.listCategoriesUseCase.execute()
    
        response.json({message: all})
    }
}

export{ListCategoriesController}