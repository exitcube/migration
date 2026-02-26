import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorTokenModify1772098546173 implements MigrationInterface {
    name = 'VendorTokenModify1772098546173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_f12751601439925accaed25f7f"`);
        await queryRunner.query(`ALTER TABLE "vendorToken" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "vendorToken" DROP CONSTRAINT "FK_a969d834a6f95dd2e531530da94"`);
        await queryRunner.query(`ALTER TABLE "vendorToken" ALTER COLUMN "vendorId" SET NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_a969d834a6f95dd2e531530da9" ON "vendorToken" ("vendorId") `);
        await queryRunner.query(`ALTER TABLE "vendorToken" ADD CONSTRAINT "FK_a969d834a6f95dd2e531530da94" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorToken" DROP CONSTRAINT "FK_a969d834a6f95dd2e531530da94"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a969d834a6f95dd2e531530da9"`);
        await queryRunner.query(`ALTER TABLE "vendorToken" ALTER COLUMN "vendorId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendorToken" ADD CONSTRAINT "FK_a969d834a6f95dd2e531530da94" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendorToken" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_f12751601439925accaed25f7f" ON "vendorToken" ("userId") `);
    }

}
