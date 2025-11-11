
import { Entity, PrimaryGeneratedColumn, Column, OneToMany,JoinTable } from 'typeorm';
import {Car} from '../../cars/entities/car.entity';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true , nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({length: 50, nullable: false })
  fullname: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  role: string;

  @Column({ nullable: true })
  status: string;
  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];
}
