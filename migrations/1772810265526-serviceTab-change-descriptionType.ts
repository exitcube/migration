import { MigrationInterface, QueryRunner } from "typeorm";

export class ServiceTabChangeDescriptionType1772810265526 implements MigrationInterface {
    name = 'ServiceTabChangeDescriptionType1772810265526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "description" character varying`);
    }

}
