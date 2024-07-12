export class Product {
    productID?: number;
    productName?: String;
    size?: number;
    material?: String;
    consignerID?: number;
    categoryID?: number;
    noOfProducts?: number;

    constructor(productID, productName, size, material, consignerID, categoryID, noOfProducts){
        if(productID !== null) this.productID = productID;
        if(productName !== null) this.productName = productName;
        if(size !== null) this.size = size;
        if(material !== null) this.material = material;
        if(consignerID !== null) this.consignerID = consignerID;
        if(categoryID !== null) this.categoryID = categoryID;
        if(noOfProducts !== null) this.noOfProducts = noOfProducts;
    }
}