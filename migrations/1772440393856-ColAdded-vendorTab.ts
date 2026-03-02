import { MigrationInterface, QueryRunner } from "typeorm";

export class ColAddedVendorTab1772440393856 implements MigrationInterface {
    name = 'ColAddedVendorTab1772440393856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "buisnessExperience" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "buisnessExperience"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "description"`);
    }

}
