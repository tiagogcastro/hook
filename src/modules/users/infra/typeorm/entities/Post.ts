import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToMany, 
  PrimaryColumn, 
  UpdateDateColumn 
} from 'typeorm';

import User from './User';

@Entity('posts')
class Post {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToMany(() => User)
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