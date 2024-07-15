import { IsDate, IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { CustomerEntity } from "./customer.enity";

@Entity('orders')
export class OrderEntity extends BaseEntity{
    @PrimaryColumn()@IsNotEmpty()
    orderID: number;

    @Column()@IsDate()
    sendDate: Date;

    @Column()@IsDate()
    receiveDate: Date;

    @Column()
    price: number;

    @OneToMany(() => ProductEntity, product => product.order)
    product: ProductEntity[];   

    @ManyToOne(() => CustomerEntity, customer => customer.order)
    customer: number;
}