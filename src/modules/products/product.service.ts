import { Injectable } from "@nestjs/common";
import { ProductDTO } from "src/dto/product.dto";
import { Product } from "src/models/product.model";

@Injectable()
export class ProductService {
    private id;
    
    private products: Product[] = [];

    getProductInformationByID(id: number): Product {
        return this.products.find(item => item.categoryID === id);
    }

    createProduct(productDTO: ProductDTO): String {
        this.id += 1;
        const product: Product = {
            productID: this.id,
            ... productDTO
        }

        const index = this.products.findIndex(item => item.productName === product.productName);
        if (index !== -1) {
            this.id -= 1;
            return "This product is already exist";
        }
        this.products.push(product);
        return "Create success";
    }

    updateProduct(productDTO: ProductDTO, id: number): String {
        const index = this.products.findIndex(item => item.categoryID === id);
        if (index !== -1) {
            this.products[index].productName = productDTO.productName;
            this.products[index].size = productDTO.size;
            this.products[index].material = productDTO.material;
            this.products[index].consignerID = productDTO.consignerID;
            this.products[index].categoryID = productDTO.categoryID;
            this.products[index].noOfProducts = productDTO.noOfProducts;
            return "Update success";
        }
        return "This product does not exist";
    }

    deleteProductByID(id: number): String {
        const index = this.products.findIndex(item => item.categoryID === id);
        if (index !== -1) {
            this.products.splice(index);
            return "Delete success";
        }
        return "This product does not exist";
    }
}