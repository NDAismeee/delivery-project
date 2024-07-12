import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { Customer } from "src/models/customer.model";
import { CustomerDTO } from "src/dto/customer.dto";

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Get("/:id")
    getCustomerInformationByID(@Param('id') id: number): Customer {
        return this.customerService.getCustomerByID(Number(id));
    }

    @Post()
    createCustomer(@Body(new ValidationPipe) customerDTO: CustomerDTO): String {
        return this.customerService.createCustomer(customerDTO);
    }

    @Put("/:id")
    updateCustomer(@Body(new ValidationPipe()) customerDTO: CustomerDTO, @Param('id') id: number): String {
        return this.customerService.updateCustomer(customerDTO, Number(id));
    }

    @Delete("/:id")
    deleteCustomer(@Param('id') id: number): String {
        return this.customerService.deleteCustomer(Number(id));
    }
}