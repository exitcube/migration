import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorOTPModelModifcation1772100561011 implements MigrationInterface {
    name = 'VendorOTPModelModifcation1772100561011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorOtp" DROP CONSTRAINT "FK_c86d8b0cd377d1d773aeb2c4f54"`);
        await queryRunner.query(`ALTER TABLE "vendorOtp" DROP COLUMN "vendor"`);
        await queryRunner.query(`ALTER TABLE "vendorOtp" ADD CONSTRAINT "FK_c126e6bc69f0239e5c30fcdd052" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorOtp" DROP CONSTRAINT "FK_c126e6bc69f0239e5c30fcdd052"`);
        await queryRunner.query(`ALTER TABLE "vendorOtp" ADD "vendor" integer`);
        await queryRunner.query(`ALTER TABLE "vendorOtp" ADD CONSTRAINT "FK_c86d8b0cd377d1d773aeb2c4f54" FOREIGN KEY ("vendor") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
