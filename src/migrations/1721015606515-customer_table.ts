import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomerTable1721015606515 implements MigrationInterface {
    name = 'CustomerTable1721015606515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`customers\` (\`customerID\` int NOT NULL, \`customerName\` varchar(255) NOT NULL, \`customerAddress\` varchar(255) NOT NULL, PRIMARY KEY (\`customerID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`customers\``);
    }

}
