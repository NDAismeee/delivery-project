import { IsNotEmpty } from "class-validator";
import { Consigner } from "src/models/consigner.model";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ConsignerEntity } from "./consigner.entity";
import { CategoryEntity } from "./category.entity";

@Entity('products')
export class ProductEntity extends BaseEntity {
    @PrimaryColumn()@IsNotEmpty()
    productID: number;

    @Column()
    productName: String;

    @Column()
    size: number;

    @Column()
    material: String;

    @Column()
    @ManyToOne(() => ConsignerEntity, consigner => consigner.consignerID)
    consignerID: number;

    @Column()
    @ManyToOne(() => CategoryEntity, category => category.categoryID)
    categoryID: number;

    @Column()
    noOfProducts: number;
}