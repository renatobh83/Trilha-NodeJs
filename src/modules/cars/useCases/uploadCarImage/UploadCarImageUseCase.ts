import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { ICarsImageRepository } from "../../repositories/Implementations/ICarsImageRepository";

interface IRequest {
    car_id:string,
    images_name: string[]
}
@injectable()
class UploadCarImageUseCase {

    constructor(
        @inject("CarsImageRepository") 
        private carsImagesRepository:ICarsImageRepository){}
    async execute({car_id,images_name}: IRequest):Promise<void> {
        
        images_name.map(async image =>{
            await this.carsImagesRepository.create(car_id,image)
            await deleteFile(`./tmp/cars/${image}`)
        })


    }
}


export { UploadCarImageUseCase}