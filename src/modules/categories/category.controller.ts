import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Category } from "src/models/category.model";
import { CategoryDTO } from "src/dto/category.dto";

@Controller('category')
export class CategoryController {
    constructor (private readonly categoryService: CategoryService) {}

    @Get("/:id")
    getCategoryInformationByID(@Param('id') id: number): Category {
        return this.categoryService.getCategoryInformationByID(Number(id));
    }

    @Post()
    createCategory(@Body(new ValidationPipe()) categoryDTO: CategoryDTO): String {
        return this.categoryService.createCategory(categoryDTO);
    }

    @Put("/:id")
    updateCategory(@Body(new ValidationPipe()) categoryDTO: CategoryDTO, @Param('id') id: number): String {
        return this.categoryService.updateCategory(categoryDTO, Number(id));
    }

    @Delete("/:id")
    deleteCategory(@Param('id') id: number): String {
        return this.categoryService.deleteCategory(Number(id));
    }
}