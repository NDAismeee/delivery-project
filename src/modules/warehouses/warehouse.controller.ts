import { Controller, Get, Put, Delete, Param, Post, Body, ValidationPipe } from "@nestjs/common";
import { Warehouse } from "src/models/warehouse.model";
import { WarehouseService } from "./warehouse.service";
import { WarehouseDTO } from "src/dto/warehouse.dto";

@Controller('warehouse')
export class WarehouseController {

    constructor(private readonly warehouseService: WarehouseService) {}

    @Get('/:id')
    getWarehouseInformation(@Param('id') id: number): Warehouse {
        return this.warehouseService.getWarehouseInformation(Number(id));
    }

    @Get()
    getAllWarehouses(): Warehouse[] {
        return this.warehouseService.getAllWarehouses();
    }

    @Post()
    createWarehouse(@Body(new ValidationPipe()) warehouseDTO: WarehouseDTO): String {
        return this.warehouseService.createWarehouse(warehouseDTO);
    }

    @Delete('/:id')
    deleteWarehouse(@Param('id') wID: number): boolean {
        return this.warehouseService.deleteWarehouse(Number(wID));
    }

    @Put('/:id')
    updateWarehouse(@Body(new ValidationPipe()) warehouseDTO: WarehouseDTO, @Param('id') id: number): String {
        return this.warehouseService.updateWarehouse(warehouseDTO, Number(id));
    }
}