import { MinLength, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class WarehouseDTO {

    @MinLength(5, {message: 'The name must have more than 5 characters'})
    warehouseName?: string;

    @IsString()
    warehouseAddress?: string;
}