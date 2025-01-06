import { hashPassword } from 'src/helpers/bcrypt';
import { Product } from 'src/product/entities/product.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Users')
export class User {
  @BeforeInsert()
  setPassword(password: string) {
    this.password = hashPassword(password || this.password);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['admin', 'staff'], default: 'staff' })
  role: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  address: string;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  @Column({ default: 'NOW()' })
  createdAt: Date;

  @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
