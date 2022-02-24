import { ICreateCategoryDTO } from "../../../../DTO/CreateCategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category";

interface ICategoriesRepository{
    findByName(name:string): Promise<Category>;
    list(): Promise<Category[]>
    create({description, name}: ICreateCategoryDTO) : Promise<void>

}

export {ICategoriesRepository}