import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('consigners')
export class ConsignerEntity extends BaseEntity {
    @PrimaryColumn()@IsNotEmpty()
    consignerID: number;

    @Column()
    consignerName: String;
}