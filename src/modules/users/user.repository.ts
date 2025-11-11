import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';  
import { CreateUserDto } from './dto/create-user.dto'; 

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, 
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto); 
    return this.userRepository.save(user); 
  }
  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } }); 
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } }); 
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.find(); 
  }
  async updateUser(id: number, updateUserDto: Partial<CreateUserDto>): Promise<User | null> {
    await this.userRepository.update(id, updateUserDto); 
    return this.findById(id); 
  }
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id); 
  }
}
