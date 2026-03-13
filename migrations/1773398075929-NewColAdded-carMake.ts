import { MigrationInterface, QueryRunner } from "typeorm";

export class NewColAddedCarMake1773398075929 implements MigrationInterface {
    name = 'NewColAddedCarMake1773398075929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carMake" ADD "tier" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carMake" DROP COLUMN "tier"`);
    }

}
