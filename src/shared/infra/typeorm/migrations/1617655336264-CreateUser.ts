import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1617655336264 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table({
      name: 'users',
      columns: [
        {
          name: "id",
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'fistname',
          type: 'varchar',
        },
        {
          name: 'lastname',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'username',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'user_avatar',
          type: 'varchar',
        },
        {
          name: 'covers',
          type: 'varchar',
          isArray: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
