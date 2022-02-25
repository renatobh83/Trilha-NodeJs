import { inject, injectable } from "tsyringe";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { ISpecificationRepository } from "../../repositories/Implementations/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
    constructor(@inject("SpecificationRepository") private specificationRepository: ISpecificationRepository){}

    async execute(): Promise<Specification[]> {
        
        return []
    }


}


export {ListSpecificationUseCase}