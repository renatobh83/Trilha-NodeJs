import { container } from "tsyringe";
import { IMailProvider } from "./IMailProvider";
import { EthrealMailProvider } from "./Implementations/EthrealMailProvider";

container.registerSingleton<IMailProvider>(
    "EthrealMailProvider",EthrealMailProvider
)