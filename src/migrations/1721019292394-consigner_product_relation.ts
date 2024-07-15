import { MigrationInterface, QueryRunner } from "typeorm";

export class ConsignerProductRelation1721019292394 implements MigrationInterface {
    name = 'ConsignerProductRelation1721019292394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`consignerConsignerID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_9c4993094c89c73288de0d1a709\``);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`categoryCategoryID\` \`categoryCategoryID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_9c4993094c89c73288de0d1a709\` FOREIGN KEY (\`categoryCategoryID\`) REFERENCES \`catgories\`(\`categoryID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_c3eaa60be8b309ddb544e855493\` FOREIGN KEY (\`consignerConsignerID\`) REFERENCES \`consigners\`(\`consignerID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_c3eaa60be8b309ddb544e855493\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_9c4993094c89c73288de0d1a709\``);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`categoryCategoryID\` \`categoryCategoryID\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_9c4993094c89c73288de0d1a709\` FOREIGN KEY (\`categoryCategoryID\`) REFERENCES \`catgories\`(\`categoryID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`consignerConsignerID\``);
    }

}
