import { MigrationInterface, QueryRunner } from "typeorm";

export class CategoryProductRelation1721018842686 implements MigrationInterface {
    name = 'CategoryProductRelation1721018842686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`consignerID\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`noOfProducts\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`categoryCategoryID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_9c4993094c89c73288de0d1a709\` FOREIGN KEY (\`categoryCategoryID\`) REFERENCES \`catgories\`(\`categoryID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_9c4993094c89c73288de0d1a709\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`categoryCategoryID\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`noOfProducts\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`consignerID\` int NOT NULL`);
    }

}
