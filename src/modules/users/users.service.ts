import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository,
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const result = await this.userRepository.createUser(createUserDto);

    return result;
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  async updateUser(id: number, updateUserDto: Partial<CreateUserDto>): Promise<User | null> {
    const result = await this.userRepository.updateUser(id, updateUserDto);



    return result;
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
