import { Specification } from "../../entity/Specification";

interface ICreateSpecificationDTO {
    name: string,
    description: string
}
interface ISpecificationRepository{
    findByName(name:string): Specification;
    list(): Specification[]
    create({description, name}: ICreateSpecificationDTO) : void

}

export {ISpecificationRepository, ICreateSpecificationDTO}