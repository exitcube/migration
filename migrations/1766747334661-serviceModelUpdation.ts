import { MigrationInterface, QueryRunner } from "typeorm";

export class ServiceModelUpdation1766747334661 implements MigrationInterface {
    name = 'ServiceModelUpdation1766747334661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "targetValue"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "value" character varying`);
        await queryRunner.query(`ALTER TABLE "services" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "services" ADD "createdBy" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "services" ADD "removedBy" integer`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "imageId"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "imageId" integer`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "UQ_3f67c9d81453c5582cf4341cafc" UNIQUE ("imageId")`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_3f67c9d81453c5582cf4341cafc" FOREIGN KEY ("imageId") REFERENCES "adminFile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_a69bcc341080729dff43e7b1649" FOREIGN KEY ("createdBy") REFERENCES "adminUser"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_7e118e0e00576f161050e60678d" FOREIGN KEY ("removedBy") REFERENCES "adminUser"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_7e118e0e00576f161050e60678d"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_a69bcc341080729dff43e7b1649"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_3f67c9d81453c5582cf4341cafc"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "UQ_3f67c9d81453c5582cf4341cafc"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "imageId"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "imageId" character varying`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "removedBy"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "targetValue" character varying`);
    }

}
