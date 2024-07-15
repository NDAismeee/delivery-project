import { MigrationInterface, QueryRunner } from "typeorm";

export class CategoryTable1721015699477 implements MigrationInterface {
    name = 'CategoryTable1721015699477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`catgories\` (\`categoryID\` int NOT NULL, \`categoryName\` varchar(255) NOT NULL, \`noOfPros\` int NOT NULL, PRIMARY KEY (\`categoryID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`catgories\``);
    }

}
