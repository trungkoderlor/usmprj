import {Injectable,UseGuards,Req} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import {UsersService} from '../users/users.service';


@Injectable()
export class AuthService {
  constructor(private jwtService:JwtService, private userService:UsersService){}

  async validateUser(email:string ,password:string):Promise<any> {
    
    const user = await this.userService.getUserByEmail(email);
    if(user && bcrypt.compareSync(password, user.password)){
      const {password, ...result} = user;
      return result;
    }
    return null;
  }
  async login(user:any){
    const payload = {email:user.email,sub:user.id};

    return{
      access_token:this.jwtService.sign(payload),
    };
  }
  async register({fullname , email,password}: {fullname: string,email:string, password:string}){
    const hashedPassword = await bcrypt.hash(password,10);
    return await this.userService.createUser({
      fullname,
      email,
      password: hashedPassword,
      role :'user',
      status: 'active',
    });
  }
  async getMe(req:any) : Promise<any | null> {
    const user = await this.userService.getUserByEmail(req.user.email);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }
 
    
}