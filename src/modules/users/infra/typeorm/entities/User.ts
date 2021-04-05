import { 
  Column, 
  CreateDateColumn,
  Entity, 
  PrimaryColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  fistname: string;
  
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