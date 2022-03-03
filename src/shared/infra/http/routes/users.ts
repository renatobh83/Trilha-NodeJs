import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "../../../../modules/accounts/useCases/CreateUsers/CreateUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ProfileUserController } from "../../../../modules/accounts/useCases/profileUser/ProfileUserController";

const userRouter = Router()

const createUserController = new CreateUserController()
const udpateUserAvatarController = new UpdateUserAvatarController()
const profileUserController = new ProfileUserController()
const uploadAvatar = multer(uploadConfig)


userRouter.post("/", createUserController.handle)

userRouter.patch("/avatar",ensureAuthenticated, uploadAvatar.single("avatar"),  udpateUserAvatarController.handle)
userRouter.get("/", ensureAuthenticated, profileUserController.handle)
export {userRouter}