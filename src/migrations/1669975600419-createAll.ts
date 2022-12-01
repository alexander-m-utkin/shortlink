import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAll1669975600419 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE link (
        "linkId" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "shortLink" varchar NOT NULL,
        link varchar NOT NULL,
        CONSTRAINT "PK_7b6029b623ae87018daf980a2df" PRIMARY KEY ("linkId"),
        CONSTRAINT "UQ_32d73eae49940ad4c1505ccbada" UNIQUE ("shortLink")
        );
        CREATE INDEX "IDX_32d73eae49940ad4c1505ccbad" ON link USING btree ("shortLink");
    `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
