import { container } from "tsyringe";
import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DayjsDateProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EthrealMailProvider } from "./MailProvider/Implementations/EthrealMailProvider";
import { LocalStorageProvider } from "./StorageProvider/implemantetions/LocalSorageProvider";
import { IStorageProvaider } from "./StorageProvider/IStorageProvider";

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",DayjsDateProvider
)


container.registerSingleton<IMailProvider>(
    "EthrealMailProvider",EthrealMailProvider
)

container.registerSingleton<IStorageProvaider>(
    "StorageProvider", LocalStorageProvider
)