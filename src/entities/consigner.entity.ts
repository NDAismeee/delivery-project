import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('consigners')
export class ConsignerEntity extends BaseEntity {
    @PrimaryColumn()
    @IsNotEmpty()
    @OneToMany(() => ProductEntity, product => product.consignerID)
    consignerID: number;

    @Column()
    consignerName: String;
}