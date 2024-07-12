import { Module } from "@nestjs/common";
import { ConsignerController } from "./consigner.controller";
import { ConsignerService } from "./consigner.service";

@Module({
    controllers: [ConsignerController],
    providers: [ConsignerService],
})

export class ConsignerModule{};