import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id'
  })
  user: User;
  
  @Column()
  description: string

  @Column("varchar", { array: true })
  content: string[];

  @CreateDateColumn()
  created_at: string;
  
  @UpdateDateColumn()
  updated_at: string;
}

export default Post;