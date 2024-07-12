export class Category {
    categoryID?: number;
    categoryName?: String;
    noOfPros?: number;

    constructor(categoryID, categoryName, noOfPros) {
        if (categoryID !== null) this.categoryID = categoryID;
        if (categoryName !== null) this.categoryName = categoryName;
        if (noOfPros !== null) this.noOfPros = noOfPros;
    }
}