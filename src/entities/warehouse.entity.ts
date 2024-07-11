import { isNotEmpty } from 'class-validator';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

console.log('tracking...')
@Entity('warehouses')
export class WarehouseEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    warehouseID: number;

    @Column()
    warehouseName: string;

    @Column()
    warehouseAddress: string;
}