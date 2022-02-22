import { Specification } from "../../entity/Specification";

interface ICreateSpecificationDTO {
    name: string,
    description: string
}
interface ISpecificationRepository{
    findByName(name:string): Promise<Specification>;
    list(): Promise<Specification[]>
    create({description, name}: ICreateSpecificationDTO) : Promise<void>

}

export {ISpecificationRepository, ICreateSpecificationDTO}