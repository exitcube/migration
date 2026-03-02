import { MigrationInterface, QueryRunner } from "typeorm";

export class Enquirytable1772430494102 implements MigrationInterface {
    name = 'Enquirytable1772430494102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "enquiryOwner" ("id" SERIAL NOT NULL, "name" character varying, "email" character varying, "mobile" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8e535593f874d85d6925536839f" UNIQUE ("mobile"), CONSTRAINT "PK_8f2e2741384e6d4e92cbf715a7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8e535593f874d85d6925536839" ON "enquiryOwner" ("mobile") `);
        await queryRunner.query(`CREATE TABLE "enquiryOrganization" ("id" SERIAL NOT NULL, "ownerId" integer, "buisnessName" character varying, "email" character varying, "mobile" character varying NOT NULL, "address" character varying, "country" character varying(100), "city" character varying(100), "state" character varying(100), "pinCode" character varying(20), "buisnessType" character varying(20), "buisnessExperience" character varying(20), "additionalInfo" character varying, "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e0c2be4bd5f5765059b24f4c683" UNIQUE ("mobile"), CONSTRAINT "PK_ba9ca0312d635143701b1cfde43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e0c2be4bd5f5765059b24f4c68" ON "enquiryOrganization" ("mobile") `);
        await queryRunner.query(`ALTER TABLE "enquiryOrganization" ADD CONSTRAINT "FK_3356bcdfaff6287dac0fd1b3bcd" FOREIGN KEY ("ownerId") REFERENCES "enquiryOwner"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enquiryOrganization" DROP CONSTRAINT "FK_3356bcdfaff6287dac0fd1b3bcd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e0c2be4bd5f5765059b24f4c68"`);
        await queryRunner.query(`DROP TABLE "enquiryOrganization"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8e535593f874d85d6925536839"`);
        await queryRunner.query(`DROP TABLE "enquiryOwner"`);
    }

}
