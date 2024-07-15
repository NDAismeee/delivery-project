import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseModule } from './modules/warehouses/warehouse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbdatasource } from './database/data-source';
import { CustomerModule } from './modules/customers/customer.module';
import { ConsignerModule } from './modules/consigners/consigner.module';
import { CategoryModule } from './modules/categories/category.module';
import { ProductModule } from './modules/products/product.module';
import { OrderModule } from './modules/orders/order.module';


@Module({
  imports: [TypeOrmModule.forRootAsync(dbdatasource), WarehouseModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }