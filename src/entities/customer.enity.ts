import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('customers')
export class CustomerEntity extends BaseEntity {
    @PrimaryColumn()@IsNotEmpty()
    customerID: number;

    @Column()
    customerName: String

    @Column()
    customerAddress: String
}