import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderProductRelation1721026012953 implements MigrationInterface {
    name = 'OrderProductRelation1721026012953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders\` DROP COLUMN \`productID\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP COLUMN \`customerID\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`orderOrderID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_9c4993094c89c73288de0d1a709\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_c3eaa60be8b309ddb544e855493\``);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`categoryCategoryID\` \`categoryCategoryID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`consignerConsignerID\` \`consignerConsignerID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_07a5616e30141918b0a7a98f6e5\` FOREIGN KEY (\`orderOrderID\`) REFERENCES \`orders\`(\`orderID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_9c4993094c89c73288de0d1a709\` FOREIGN KEY (\`categoryCategoryID\`) REFERENCES \`catgories\`(\`categoryID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_c3eaa60be8b309ddb544e855493\` FOREIGN KEY (\`consignerConsignerID\`) REFERENCES \`consigners\`(\`consignerID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_c3eaa60be8b309ddb544e855493\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_9c4993094c89c73288de0d1a709\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_07a5616e30141918b0a7a98f6e5\``);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`consignerConsignerID\` \`consignerConsignerID\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`categoryCategoryID\` \`categoryCategoryID\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_c3eaa60be8b309ddb544e855493\` FOREIGN KEY (\`consignerConsignerID\`) REFERENCES \`consigners\`(\`consignerID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_9c4993094c89c73288de0d1a709\` FOREIGN KEY (\`categoryCategoryID\`) REFERENCES \`catgories\`(\`categoryID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`orderOrderID\``);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD \`customerID\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD \`productID\` int NOT NULL`);
    }

}
