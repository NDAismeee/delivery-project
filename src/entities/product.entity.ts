import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { ConsignerEntity } from "./consigner.entity";
import { OrderEntity } from "./order.entity";
import { WarehouseEntity } from "./warehouse.entity";

@Entity('products')
export class ProductEntity extends BaseEntity {
    @PrimaryColumn()@IsNotEmpty()
    productID: number;

    @ManyToOne(() => OrderEntity, order => order.product)
    order: number;

    @ManyToMany(() => WarehouseEntity)
    @JoinTable()
    warehouses: WarehouseEntity[];

    @Column()
    productName: String;

    @Column()
    size: number;

    @Column()
    material: String;

    @Column()
    noOfProducts: number;

    @ManyToOne(() => CategoryEntity, category => category.product1)
    category: number;

    @ManyToOne(() => ConsignerEntity, consigner => consigner.product2)
    consigner: number;
}