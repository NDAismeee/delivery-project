import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { OrderEntity } from "./order.entity";

@Entity('customers')
export class CustomerEntity extends BaseEntity {
    @PrimaryColumn()@IsNotEmpty()
    customerID: number;

    @OneToMany(() => OrderEntity, order => order.customer)
    order:OrderEntity[];

    @Column()
    customerName: String;

    @Column()
    customerAddress: String;
}