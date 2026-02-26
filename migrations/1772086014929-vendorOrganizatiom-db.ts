import { MigrationInterface, QueryRunner } from "typeorm";

export class VendorOrganizatiomDb1772086014929 implements MigrationInterface {
    name = 'VendorOrganizatiomDb1772086014929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendorOrganization" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "organizationName" character varying, "organizationId" character varying NOT NULL, "password" character varying NOT NULL, "contactMobile" integer NOT NULL, "contactEmail" character varying, "address" character varying, "country" character varying(100), "city" character varying(100), "state" character varying(100), "pinCode" character varying(20), "latitude" numeric(10,5) NOT NULL, "longitude" numeric(10,5) NOT NULL, "openingTime" character varying, "closingTime" character varying, "status" character varying, "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vendorId" integer, CONSTRAINT "UQ_cb2013e8bce28dee03f257ef3eb" UNIQUE ("organizationId"), CONSTRAINT "PK_b614153da3ea191afb29f7efa37" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_aa8895c87ec9877a1a93e10e3a" ON "vendorOrganization" ("userId") `);
        await queryRunner.query(`CREATE TABLE "vendorOrganizationToken" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "vendorOrganizationId" integer NOT NULL, "refreshToken" text NOT NULL, "accessToken" character varying NOT NULL, "refreshTokenExpiry" TIMESTAMP, "refreshTokenStatus" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0fae9c9d8ad684e164093724c62" UNIQUE ("accessToken"), CONSTRAINT "PK_a59e82a5c4a270d6a8d0d44ae35" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f789bdd3d1480768f8de124fe8" ON "vendorOrganizationToken" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_e8af3ab5fdc1390bb18e655b19" ON "vendorOrganizationToken" ("vendorOrganizationId") `);
        await queryRunner.query(`CREATE TABLE "vendorToken" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "refreshToken" text NOT NULL, "accessToken" character varying NOT NULL, "refreshTokenExpiry" TIMESTAMP, "refreshTokenStatus" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vendorId" integer, CONSTRAINT "UQ_cb9bc19bf2992a4ddcaecf88436" UNIQUE ("accessToken"), CONSTRAINT "PK_19e385c6903fd5f6021473a352e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_07cf4395984ad2380aad7aac2f" ON "vendorToken" ("uuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_f12751601439925accaed25f7f" ON "vendorToken" ("userId") `);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" ADD CONSTRAINT "FK_bfe2a038de879af67c0ea7d8f1b" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendorOrganizationToken" ADD CONSTRAINT "FK_e8af3ab5fdc1390bb18e655b19c" FOREIGN KEY ("vendorOrganizationId") REFERENCES "vendorOrganization"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendorToken" ADD CONSTRAINT "FK_a969d834a6f95dd2e531530da94" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendorToken" DROP CONSTRAINT "FK_a969d834a6f95dd2e531530da94"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganizationToken" DROP CONSTRAINT "FK_e8af3ab5fdc1390bb18e655b19c"`);
        await queryRunner.query(`ALTER TABLE "vendorOrganization" DROP CONSTRAINT "FK_bfe2a038de879af67c0ea7d8f1b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f12751601439925accaed25f7f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_07cf4395984ad2380aad7aac2f"`);
        await queryRunner.query(`DROP TABLE "vendorToken"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e8af3ab5fdc1390bb18e655b19"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f789bdd3d1480768f8de124fe8"`);
        await queryRunner.query(`DROP TABLE "vendorOrganizationToken"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_aa8895c87ec9877a1a93e10e3a"`);
        await queryRunner.query(`DROP TABLE "vendorOrganization"`);
    }

}
