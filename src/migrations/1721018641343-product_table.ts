import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductTable1721018641343 implements MigrationInterface {
    name = 'ProductTable1721018641343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products\` (\`productID\` int NOT NULL, \`productName\` varchar(255) NOT NULL, \`size\` int NOT NULL, \`material\` varchar(255) NOT NULL, \`consignerID\` int NOT NULL, PRIMARY KEY (\`productID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`products\``);
    }

}
