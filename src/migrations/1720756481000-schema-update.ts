import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1720756481000 implements MigrationInterface {
    name = 'SchemaUpdate1720756481000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`consigners\` (\`consignerID\` int NOT NULL, \`consignerName\` varchar(255) NOT NULL, PRIMARY KEY (\`consignerID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`consigners\``);
    }

}
