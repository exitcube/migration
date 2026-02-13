import { MigrationInterface, QueryRunner } from "typeorm";

export class BannersByLocationTable1770979598505 implements MigrationInterface {
    name = 'BannersByLocationTable1770979598505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bannersByLocation" ("id" SERIAL NOT NULL, "bannerId" integer, "latitude" numeric(10,5) NOT NULL, "longitude" numeric(10,5) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_3b27d7cbf98415f71366a056d5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2fa626659ad822d7d1433c62ef" ON "bannersByLocation" ("bannerId") `);
        await queryRunner.query(`ALTER TABLE "bannersByLocation" ADD CONSTRAINT "FK_2fa626659ad822d7d1433c62efb" FOREIGN KEY ("bannerId") REFERENCES "banner"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bannersByLocation" DROP CONSTRAINT "FK_2fa626659ad822d7d1433c62efb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2fa626659ad822d7d1433c62ef"`);
        await queryRunner.query(`DROP TABLE "bannersByLocation"`);
    }

}
