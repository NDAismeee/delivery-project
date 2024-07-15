import { Injectable } from "@nestjs/common";
import { Order } from "src/models/order.model";

@Injectable()
export class OrderService {
    private id;
    private orders: Order[] = [];
}