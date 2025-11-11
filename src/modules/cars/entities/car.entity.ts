import {Entity, Column, PrimaryGeneratedColumn,ManyToOne,ManyToMany,JoinTable} from 'typeorm';
import { Brand } from '../../brands/entities/brand.entity';
import {User} from '../../users/entities/user.entity';
@Entity('car')
export class Car{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
  @Column({ nullable: true })
  price: number;
   
  @ManyToMany(() => Brand, (brand) => brand.cars)
  @JoinTable() 
  brands: Brand[];
  
  @ManyToOne(() => User, (user) => user.cars)
  user: User;
}