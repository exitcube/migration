import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorOTPModel1772100225601 implements MigrationInterface {
    name = 'VendorOTPModel1772100225601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendorOtp" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "vendorId" integer NOT NULL, "otp" character varying NOT NULL, "otpToken" character varying NOT NULL, "lastRequestedTime" TIMESTAMP NOT NULL, "requestCount" smallint NOT NULL DEFAULT '0', "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vendor" integer, CONSTRAINT "PK_0c6f7712b3610573b9c7aa7e0a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c126e6bc69f0239e5c30fcdd05" ON "vendorOtp" ("vendorId") `);
        await queryRunner.query(`ALTER TABLE "vendorOtp" ADD CONSTRAINT "FK_c86d8b0cd377d1d773aeb2c4f54" FOREIGN KEY ("vendor") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorOtp" DROP CONSTRAINT "FK_c86d8b0cd377d1d773aeb2c4f54"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c126e6bc69f0239e5c30fcdd05"`);
        await queryRunner.query(`DROP TABLE "vendorOtp"`);
    }

}
