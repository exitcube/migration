import { MigrationInterface, QueryRunner } from "typeorm";

export class JoiningDateColAdminUser1764763356156 implements MigrationInterface {
    name = 'JoiningDateColAdminUser1764763356156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adminUser" ADD "joiningDate" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adminUser" DROP COLUMN "joiningDate"`);
    }

}
