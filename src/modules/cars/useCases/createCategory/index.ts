import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


export default (): CreateCategoryController =>{
    const categoriesRepository = new CategoryRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
    
    const createCategoryController = new CreateCategoryController(createCategoryUseCase)
    return createCategoryController
}