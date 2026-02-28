import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorOrgOtp1772275041493 implements MigrationInterface {
    name = 'VendorOrgOtp1772275041493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorOrgOtp" DROP CONSTRAINT "FK_ddd7f36dee891118403919ad21a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ddd7f36dee891118403919ad21"`);
        await queryRunner.query(`ALTER TABLE "vendorOrgOtp" RENAME COLUMN "vendorId" TO "vendorOrgId"`);
        await queryRunner.query(`CREATE INDEX "IDX_fdf54b7c941369e9a3dc0b4736" ON "vendorOrgOtp" ("vendorOrgId") `);
        await queryRunner.query(`ALTER TABLE "vendorOrgOtp" ADD CONSTRAINT "FK_fdf54b7c941369e9a3dc0b4736b" FOREIGN KEY ("vendorOrgId") REFERENCES "vendorOrganization"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorOrgOtp" DROP CONSTRAINT "FK_fdf54b7c941369e9a3dc0b4736b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fdf54b7c941369e9a3dc0b4736"`);
        await queryRunner.query(`ALTER TABLE "vendorOrgOtp" RENAME COLUMN "vendorOrgId" TO "vendorId"`);
        await queryRunner.query(`CREATE INDEX "IDX_ddd7f36dee891118403919ad21" ON "vendorOrgOtp" ("vendorId") `);
        await queryRunner.query(`ALTER TABLE "vendorOrgOtp" ADD CONSTRAINT "FK_ddd7f36dee891118403919ad21a" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
