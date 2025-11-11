import {Entity, Column, PrimaryGeneratedColumn, ManyToMany,JoinTable} from 'typeorm';
import { Car } from '../../cars/entities/car.entity';
@Entity('brand')
export class Brand{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
  
  @ManyToMany(() => Car, (car) => car.brands)
  cars: Car[];
}