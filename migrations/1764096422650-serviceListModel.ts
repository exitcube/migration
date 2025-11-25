import { MigrationInterface, QueryRunner } from "typeorm";

export class ServiceListModel1764096422650 implements MigrationInterface {
    name = 'ServiceListModel1764096422650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "serviceList" ("id" SERIAL NOT NULL, "displayName" character varying NOT NULL, "value" character varying NOT NULL, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT false, "imageId" integer, CONSTRAINT "PK_d44cd9a6971e3273bb7422994a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "serviceList" ADD CONSTRAINT "FK_6be7f833a43dd4da18c62813edb" FOREIGN KEY ("imageId") REFERENCES "adminfile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "serviceList" DROP CONSTRAINT "FK_6be7f833a43dd4da18c62813edb"`);
        await queryRunner.query(`DROP TABLE "serviceList"`);
    }

}
