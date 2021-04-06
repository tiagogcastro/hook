import { 
  Column, 
  CreateDateColumn,
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  firstname: string;
  
  @Column()
  lastname: string;

  @Column()
  email: string;;

  @Column()
  username: string;

  @Column()
  password: string;
  
  @Column()
  user_avatar: string;
  
  @Column("varchar", { array: true })
  covers: string[];
  
  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;

}

export default User;