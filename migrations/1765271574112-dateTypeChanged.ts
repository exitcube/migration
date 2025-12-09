import { MigrationInterface, QueryRunner } from "typeorm";

export class DateTypeChanged1765271574112 implements MigrationInterface {
    name = 'DateTypeChanged1765271574112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "banner" DROP COLUMN "startTime"`);
        await queryRunner.query(`ALTER TABLE "banner" ADD "startTime" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "banner" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "banner" ADD "endTime" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "banner" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "banner" ADD "endTime" date`);
        await queryRunner.query(`ALTER TABLE "banner" DROP COLUMN "startTime"`);
        await queryRunner.query(`ALTER TABLE "banner" ADD "startTime" date`);
    }

}
