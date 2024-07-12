import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ConsignerService } from "./consigner.service";
import { Consigner } from "src/models/consigner.model";
import { ConsignerDTO } from "src/dto/consigner.dto";


@Controller('consigner')
export class ConsignerController {

    constructor(private readonly consignerService: ConsignerService){}

    @Get('/:id')
    getConsignerInformationByID(@Param ('id') id: number): Consigner {
        return this.consignerService.getConsignerInformationByID(Number(id));
    }

    @Get()
    getAllConsigner(): Consigner[] {
        return this.consignerService.getAllConsigner();
    }

    @Post()
    createConsigner(@Body(new ValidationPipe()) consignerDTO: ConsignerDTO): String {
        return this.consignerService.createConsigner(consignerDTO);
    }

    @Delete("/:id")
    deleteConsignerByID(@Param('id') id: number): String {
        return this.consignerService.deleteConsignerByID(Number(id));
    }

    @Put("/:id")
    updateConsigner(@Body(new ValidationPipe()) consignerDTO: ConsignerDTO, @Param('id') id: number): String {
        return this.consignerService.updateConsiger(consignerDTO, Number(id));
    }
}