import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseModule } from './modules/warehoouses/warehouse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { WarehouseEntity } from './enities/warehouse.entity';
import { dbdatasource } from './database/data-source';


@Module({
  imports: [TypeOrmModule.forRootAsync(dbdatasource), WarehouseModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }