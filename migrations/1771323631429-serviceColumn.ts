import { MigrationInterface, QueryRunner } from "typeorm";

export class ServiceColumn1771323631429 implements MigrationInterface {
    name = 'ServiceColumn1771323631429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" ADD "displaySequence" integer`);
        await queryRunner.query(`ALTER TABLE "services" ADD "status" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "displaySequence"`);
    }

}
