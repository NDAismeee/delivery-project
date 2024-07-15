import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('catgories')
export class CategoryEntity extends BaseEntity {
    @PrimaryColumn()@IsNotEmpty()
    categoryID: number;

    @OneToMany(() => ProductEntity, product => product.category)
    product1: ProductEntity[]

    @Column()
    categoryName: String;

    @Column()
    noOfPros: number;
} 