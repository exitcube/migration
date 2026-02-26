import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorOrganizationMobileColumn1772128395925 implements MigrationInterface {
    name = 'VendorOrganizationMobileColumn1772128395925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorOrganization" RENAME COLUMN "contactMobile" TO "mobile"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" DROP COLUMN "mobile"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ADD "mobile" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorOrganization" DROP COLUMN "mobile"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ADD "mobile" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" RENAME COLUMN "mobile" TO "contactMobile"`);
    }

}
