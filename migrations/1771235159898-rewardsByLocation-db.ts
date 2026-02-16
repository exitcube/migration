import { MigrationInterface, QueryRunner } from "typeorm";

export class RewardsByLocationDb1771235159898 implements MigrationInterface {
    name = 'RewardsByLocationDb1771235159898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rewardssByLocation" ("id" SERIAL NOT NULL, "rewardId" integer, "latitude" numeric(10,5) NOT NULL, "longitude" numeric(10,5) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_e4bb89feea8d531aa4d82a213c0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0be1d88658ff354ef9894af059" ON "rewardssByLocation" ("rewardId") `);
        await queryRunner.query(`ALTER TABLE "rewardssByLocation" ADD CONSTRAINT "FK_0be1d88658ff354ef9894af0598" FOREIGN KEY ("rewardId") REFERENCES "reward"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rewardssByLocation" DROP CONSTRAINT "FK_0be1d88658ff354ef9894af0598"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0be1d88658ff354ef9894af059"`);
        await queryRunner.query(`DROP TABLE "rewardssByLocation"`);
    }

}
