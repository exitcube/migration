import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedIndexing1773295726717 implements MigrationInterface {
    name = 'UpdatedIndexing1773295726717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_92dd04533a2383d8cd834233fd" ON "users" ("profilePicId") `);
        await queryRunner.query(`CREATE INDEX "IDX_befefb4e7e3ac02b7e441f96b9" ON "vendor" ("profilePicId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4af0fffedae782bf4dfcb07c96" ON "bannerCategory" ("createdBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_dcf950685a5f448c25455a2a5c" ON "banner" ("bgImageId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e1f603ae034d531c266b8a5741" ON "banner" ("categoryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3282821e258d5550f29eeaad0c" ON "banner" ("createdBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_d7dbb829c4be94d7dd752a856f" ON "banner" ("updatedBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_89808b7abcdf617ec7f7964837" ON "banner" ("approvedBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_6bc592dbf0cf4aa26cfa09e45b" ON "banner" ("removedBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_3f67c9d81453c5582cf4341caf" ON "services" ("imageId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a69bcc341080729dff43e7b164" ON "services" ("createdBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_7e118e0e00576f161050e60678" ON "services" ("removedBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_abaa9f1dc0a12db42759c12555" ON "bannerUserTargetConfig" ("createdBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_fc40d54869687b838a9c82d61e" ON "bannerAudienceType" ("bannerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_036633ca90752bce52556aca27" ON "bannerAudienceType" ("bannerConfigId") `);
        await queryRunner.query(`CREATE INDEX "IDX_921a1e7708705bfe5b72e15c10" ON "serviceList" ("image") `);
        await queryRunner.query(`CREATE INDEX "IDX_bc6209df84eb1e75debf1abebe" ON "rewardCategory" ("createdBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_2934baf7d4129fd1392d74582e" ON "reward" ("categoryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_17cafc46ff71710f0e5bc118d8" ON "reward" ("rewardOfferTypeId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4ffa5ebcb325c95724048d23a3" ON "reward" ("rewardContributorId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f8bdcdd0e1b68c80ea9cf165ba" ON "reward" ("createdBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_adf003d227658c4ce702b6956b" ON "reward" ("updatedBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_2e1af6b8a403c1d416e70ed101" ON "reward" ("removedBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_b5969f716249333324f18cc2a8" ON "rewardUserTargetConfig" ("createdBy") `);
        await queryRunner.query(`CREATE INDEX "IDX_3356bcdfaff6287dac0fd1b3bc" ON "enquiryOrganization" ("ownerId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_3356bcdfaff6287dac0fd1b3bc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b5969f716249333324f18cc2a8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2e1af6b8a403c1d416e70ed101"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_adf003d227658c4ce702b6956b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f8bdcdd0e1b68c80ea9cf165ba"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4ffa5ebcb325c95724048d23a3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_17cafc46ff71710f0e5bc118d8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2934baf7d4129fd1392d74582e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc6209df84eb1e75debf1abebe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_921a1e7708705bfe5b72e15c10"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_036633ca90752bce52556aca27"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fc40d54869687b838a9c82d61e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_abaa9f1dc0a12db42759c12555"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7e118e0e00576f161050e60678"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a69bcc341080729dff43e7b164"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3f67c9d81453c5582cf4341caf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6bc592dbf0cf4aa26cfa09e45b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_89808b7abcdf617ec7f7964837"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d7dbb829c4be94d7dd752a856f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3282821e258d5550f29eeaad0c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e1f603ae034d531c266b8a5741"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dcf950685a5f448c25455a2a5c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4af0fffedae782bf4dfcb07c96"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_befefb4e7e3ac02b7e441f96b9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_92dd04533a2383d8cd834233fd"`);
    }

}
