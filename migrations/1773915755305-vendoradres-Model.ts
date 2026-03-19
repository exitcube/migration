import { MigrationInterface, QueryRunner } from "typeorm";

export class VendoradresModel1773915755305 implements MigrationInterface {
    name = 'VendoradresModel1773915755305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendorAddress" ("id" SERIAL NOT NULL, "vendorId" integer NOT NULL, "address" character varying, "country" character varying(100), "city" character varying(100), "state" character varying(100), "pinCode" character varying(20), "latitude" numeric(10,5) NOT NULL, "longitude" numeric(10,5) NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f7d6ee1f85d104964c3c01f71fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c9fb76c053b687037a539bc0d9" ON "vendorAddress" ("vendorId") `);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "pinCode"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ADD "isVerified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "isVerified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "vendorAddress" ADD CONSTRAINT "FK_c9fb76c053b687037a539bc0d96" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorAddress" DROP CONSTRAINT "FK_c9fb76c053b687037a539bc0d96"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP COLUMN "isVerified"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" DROP COLUMN "isVerified"`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "pinCode" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "state" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "city" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "country" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "address" character varying`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "longitude" numeric(10,5) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD "latitude" numeric(10,5) NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9fb76c053b687037a539bc0d9"`);
        await queryRunner.query(`DROP TABLE "vendorAddress"`);
    }

}
