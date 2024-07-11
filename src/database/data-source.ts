import { WarehouseEntity } from 'src/enities/warehouse.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dbdatasource: DataSourceOptions = {
    // TypeORM PostgreSQL DB Drivers
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    // Database name
    database: 'delivery-db',
    // Synchronize database schema with entities 
    synchronize: false,
    // TypeORM Entity
    entities: ['src/entities/*{.js, .ts}'],
    // Your Migration path
    migrations: ['src/migrations/*{.js, .ts}'],
    logging: true,
  };
  
const dataSource = new DataSource(dbdatasource)
export default dataSource
//sdfkja;