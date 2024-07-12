import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('warehouses')
export class WarehouseEntity extends BaseEntity {
    @PrimaryGeneratedColumn()@IsNotEmpty()
    warehouseID: number;

    @Column()
    warehouseName: string;

    @Column()
    warehouseAddress: string;
}