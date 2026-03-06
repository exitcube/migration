import { MigrationInterface, QueryRunner } from "typeorm";

export class RequestCallModel1772793752771 implements MigrationInterface {
    name = 'RequestCallModel1772793752771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "requestCall" ("id" SERIAL NOT NULL, "mobile" character varying NOT NULL, "status" character varying, "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8556e93ab9ca3a1b97594f8b50d" UNIQUE ("mobile"), CONSTRAINT "PK_00525c8924c53a075b4ff060b8c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8556e93ab9ca3a1b97594f8b50" ON "requestCall" ("mobile") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_8556e93ab9ca3a1b97594f8b50"`);
        await queryRunner.query(`DROP TABLE "requestCall"`);
    }

}
