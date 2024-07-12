export class Customer {
    customerID?: number;
    customerName?: String;
    customerAddress?: String;

    constructor(customerID, customerName, customerAddress) {
        if(customerID !== null) this.customerID = customerID;
        if(customerAddress !== null) this.customerAddress= customerAddress;
        if(customerName !== null) this.customerName = customerName;
    }
}