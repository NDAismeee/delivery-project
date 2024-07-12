import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseModule } from './modules/warehoouses/warehouse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { WarehouseEntity } from './entities/warehouse.entity';
import { dbdatasource } from './database/data-source';
import { CustomerModule } from './modules/customers/customer.module';
import { ConsignerModule } from './modules/consigners/consigner.module';
import { CategoryModule } from './modules/categories/category.module';


@Module({
  imports: [TypeOrmModule.forRootAsync(dbdatasource), WarehouseModule, CustomerModule, ConsignerModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }