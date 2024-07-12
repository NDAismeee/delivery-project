import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "src/models/product.model";
import { ProductDTO } from "src/dto/product.dto";

@Controller('product')
export class ProductController {
    constructor (private readonly productService: ProductService){}

    @Get("/:id")
    getProductInformationByID(@Param('id') id: number): Product {
        return this.productService.getProductInformationByID(Number(id));
    }

    @Post()
    createProduct(@Body(new ValidationPipe()) productDTO: ProductDTO): String {
        return this.productService.createProduct(productDTO);
    }

    @Put()
    updateProduct(@Body(new ValidationPipe()) productDTO: ProductDTO, @Param('id') id: number): String {
        return this.productService.updateProduct(productDTO, Number(id));
    }

    @Delete("/:id")
    deleteProductByID(@Param('id') id: number): String {
        return this.productService.deleteProductByID(Number(id));
    }
}