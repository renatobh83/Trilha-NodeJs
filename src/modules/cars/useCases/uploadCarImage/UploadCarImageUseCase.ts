import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { deleteFile } from "../../../../utils/file";
import { ICarsImageRepository } from "../../repositories/Implementations/ICarsImageRepository";
import { ICarRepository } from "../../repositories/Implementations/ICarsRepository";

interface IRequest {
    car_id:string,
    images_name: string[]
}
@injectable()
class UploadCarImageUseCase {

    constructor(
        @inject("CarsImageRepository") 
        private carsImagesRepository:ICarsImageRepository,
        @inject("CarsRepository")
        private carsRepository:ICarRepository){}
    async execute({car_id,images_name}: IRequest):Promise<void> {
        
        const carExist =  await this.carsRepository.findById(car_id)

        if(!carExist) {
            throw new AppError("Car does not exist")
        }


        images_name.map(async image =>{     
                await this.carsImagesRepository.create(car_id,image)
                await deleteFile(`./tmp/cars/${image}`)             
        })


    }
}


export { UploadCarImageUseCase}