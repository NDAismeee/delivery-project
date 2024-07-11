import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWarehouseTable1720705464213 implements MigrationInterface {
    name = 'CreateWarehouseTable1720705464213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`warehouses\` (\`warehouseID\` int NOT NULL AUTO_INCREMENT, \`warehouseName\` varchar(255) NOT NULL, \`warehouseAddress\` varchar(255) NOT NULL, PRIMARY KEY (\`warehouseID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`warehouses\``);
    }

}
