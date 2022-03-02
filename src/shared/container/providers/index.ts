import { container } from "tsyringe";
import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DayjsDateProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EthrealMailProvider } from "./MailProvider/Implementations/EthrealMailProvider";

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",DayjsDateProvider
)


container.registerSingleton<IMailProvider>(
    "EthrealMailProvider",EthrealMailProvider
)