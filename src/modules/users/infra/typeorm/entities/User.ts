import { 
  Column, 
  CreateDateColumn,
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  firstname: string;
  
  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;
  
  @Column()
  user_avatar: string;
  
  @Column("varchar", { array: true})
  covers: string[];
  
  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export default User;