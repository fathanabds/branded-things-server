import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column()
  imgUrl: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: number;

  @ManyToOne(() => User, (user) => user.products)
  user: number;

  @Column({ default: 'NOW()' })
  createdAt: Date;

  @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
