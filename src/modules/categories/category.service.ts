import { Injectable } from "@nestjs/common";
import { CategoryDTO } from "src/dto/category.dto";
import { Category } from "src/models/category.model";

@Injectable()
export class CategoryService {
    private id;

    private categories: Category[] = [];

    getCategoryInformationByID(id: number): Category {
        return this.categories.find(item => item.categoryID === id);
    }

    createCategory(categoryDTO: CategoryDTO): String {
        this.id += 1;
        const category: Category = {
            categoryID: this.id,
            ...categoryDTO
        }
        const index = this.categories.findIndex(item => item.categoryName === category.categoryName);
        if (index !== -1) {
            this.id -= 1;
            return "This category has already been existed";
        }
        this.categories.push(category);
        return "Create success";
    }

    updateCategory(categoryDTO: CategoryDTO, id: number): String {
        const index = this.categories.findIndex(item => item.categoryID === id);
        if (index !== -1) {
            this.categories[index].categoryName = categoryDTO.categoryName;
            this.categories[index].noOfPros = categoryDTO.noOfPros;
            return "Update success"
        }
        return "This category does not exist";
    }

    deleteCategory(id: number): String {
        const index = this.categories.findIndex(item => item.categoryID === id);
        if (index !== -1) {
            this.categories.splice(index);
            return "Delete success"
        }
        return "This category does not exist";
    }
}