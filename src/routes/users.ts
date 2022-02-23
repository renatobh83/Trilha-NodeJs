import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middwares/ensureAuthenticate";
import { CreateUserController } from "../modules/accounts/useCases/CreateUsers/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const userRouter = Router()

const createUserController = new CreateUserController()
const udpateUserAvatarController = new UpdateUserAvatarController()

const uploadAvatar = multer(uploadConfig.upload("./temp/avatar"))


userRouter.post("/", createUserController.handle)

userRouter.patch("/avatar",ensureAuthenticated, uploadAvatar.single("avatar"),  udpateUserAvatarController.handle)

export {userRouter}