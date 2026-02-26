import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorOrganizationVendorFileModified1772127046158 implements MigrationInterface {
    name = 'VendorOrganizationVendorFileModified1772127046158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_557d8f7f3caa323ab1b351b34f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_aa8895c87ec9877a1a93e10e3a"`);
        await queryRunner.query(`ALTER TABLE "vendorFile" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "vendorFile" DROP CONSTRAINT "FK_7e747428f6ca1c64157a01765a5"`);
        await queryRunner.query(`ALTER TABLE "vendorFile" ALTER COLUMN "vendorId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" DROP CONSTRAINT "FK_bfe2a038de879af67c0ea7d8f1b"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ALTER COLUMN "vendorId" SET NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_7e747428f6ca1c64157a01765a" ON "vendorFile" ("vendorId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bfe2a038de879af67c0ea7d8f1" ON "vendorOrganization" ("vendorId") `);
        await queryRunner.query(`ALTER TABLE "vendorFile" ADD CONSTRAINT "FK_7e747428f6ca1c64157a01765a5" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ADD CONSTRAINT "FK_bfe2a038de879af67c0ea7d8f1b" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorOrganization" DROP CONSTRAINT "FK_bfe2a038de879af67c0ea7d8f1b"`);
        await queryRunner.query(`ALTER TABLE "vendorFile" DROP CONSTRAINT "FK_7e747428f6ca1c64157a01765a5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bfe2a038de879af67c0ea7d8f1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7e747428f6ca1c64157a01765a"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ALTER COLUMN "vendorId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ADD CONSTRAINT "FK_bfe2a038de879af67c0ea7d8f1b" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendorFile" ALTER COLUMN "vendorId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendorFile" ADD CONSTRAINT "FK_7e747428f6ca1c64157a01765a5" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendorFile" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_aa8895c87ec9877a1a93e10e3a" ON "vendorOrganization" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_557d8f7f3caa323ab1b351b34f" ON "vendorFile" ("userId") `);
    }

}
