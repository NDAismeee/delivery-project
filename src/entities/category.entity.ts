import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('catgories')
export class CategoryEntity extends BaseEntity {
    @PrimaryColumn()
    @IsNotEmpty()
    @OneToMany(() => ProductEntity, product => product.categoryID)
    categoryID: number;

    @Column()
    categoryName: String;

    @Column()
    noOfPros: number;
}