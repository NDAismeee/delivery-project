export class Order {
    orderID?: number;
    sendDate?: Date;
    receiveDate?: Date;
    price?: number;
    productID?: number;
    customerID?: number;

    constructor(orderID, sendDate, receiveDate, price, productID, customerID) {
        if (orderID !== null) this.orderID = orderID;
        if (sendDate !== null) this.sendDate = sendDate;
        if (receiveDate !== null) this.receiveDate = receiveDate;
        if (price !== null) this.price = price;
        if (productID !== null) this.productID = productID;
        if (customerID !== null) this.customerID = customerID;
    }
}