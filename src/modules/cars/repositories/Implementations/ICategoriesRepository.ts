import { ICreateCategoryDTO } from "../../../../DTO/CreateCategoryDTO";
import { Category } from "../../entities/Category";

interface ICategoriesRepository{
    findByName(name:string): Promise<Category>;
    list(): Promise<Category[]>
    create({description, name}: ICreateCategoryDTO) : Promise<void>

}

export {ICategoriesRepository}