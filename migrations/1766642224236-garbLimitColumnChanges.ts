import { MigrationInterface, QueryRunner } from "typeorm";

export class GarbLimitColumnChanges1766642224236 implements MigrationInterface {
    name = 'GarbLimitColumnChanges1766642224236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" ALTER COLUMN "grabLimit" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" ALTER COLUMN "grabLimit" SET NOT NULL`);
    }

}
