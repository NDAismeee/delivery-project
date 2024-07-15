import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderTable1721016206064 implements MigrationInterface {
    name = 'OrderTable1721016206064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`orders\` (\`orderID\` int NOT NULL, \`price\` int NOT NULL, \`productID\` int NOT NULL, \`customerID\` int NOT NULL, PRIMARY KEY (\`orderID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`orders\``);
    }

}
