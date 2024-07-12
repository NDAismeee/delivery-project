import { Injectable } from "@nestjs/common";
import { CustomerDTO } from "src/dto/customer.dto";
import { Customer } from "src/models/customer.model";

@Injectable()
export class CustomerService {
    private id;

    private customers: Customer[] = [
        
    ]

    getCustomerByID(id: number): Customer {
        return this.customers.find(item => item.customerID == id);
    }

    createCustomer(customerDTO: CustomerDTO): String {
        this.id += 1;
        const customer: Customer = {
            customerID: this.id,
            ...customerDTO
        }
        const index = this.customers.findIndex(item => item.customerID === customer.customerID);
        if (index !== -1) {
            return "Customer has already existed";
        }
        this.customers.push(customer);
        return "Create success";
    }

    updateCustomer(customerDTO: CustomerDTO, id: number): String {
        const index = this.customers.findIndex(item => item.customerID === id);
        if (index !== 1) {
            this.customers[index].customerName = customerDTO.customerName;
            this.customers[index].customerAddress = customerDTO.customerAddress;
            return "Update success";
        }
        return "This customer doesn't exit";
    }

    deleteCustomer(id: number): String {
        const index = this.customers.findIndex(item => item.customerID === id);
        if (index !== 1) {
            this.customers.splice(index);
            return "Delete success";
        }
        return "This customer does not exist";
    }
}