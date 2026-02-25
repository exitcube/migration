import { MigrationInterface, QueryRunner } from "typeorm";

export class UserModelUpdation1771999699721 implements MigrationInterface {
    name = 'UserModelUpdation1771999699721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isBlocked" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isBlocked"`);
    }

}
