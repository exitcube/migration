import { MigrationInterface, QueryRunner } from "typeorm";

export class ChnagingType1772516448990 implements MigrationInterface {
    name = 'ChnagingType1772516448990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enquiryOrganization" RENAME COLUMN "buisnessType" TO "businessType"`);
        await queryRunner.query(`ALTER TABLE "enquiryOrganization" DROP COLUMN "businessType"`);
        await queryRunner.query(`ALTER TABLE "enquiryOrganization" ADD "businessType" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enquiryOrganization" DROP COLUMN "businessType"`);
        await queryRunner.query(`ALTER TABLE "enquiryOrganization" ADD "businessType" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "enquiryOrganization" RENAME COLUMN "businessType" TO "buisnessType"`);
    }

}
