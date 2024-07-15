import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('consigners')
export class ConsignerEntity extends BaseEntity {
    @PrimaryColumn()
    @IsNotEmpty()
    consignerID: number;

    @OneToMany(() => ProductEntity, product => product.consigner)
    product2: ProductEntity[];

    @Column()
    consignerName: String;
}