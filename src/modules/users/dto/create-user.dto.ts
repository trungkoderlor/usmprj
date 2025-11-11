import { IsEmail, IsNotEmpty, IsString,Length,IsIn,IsOptional } from 'class-validator';


export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Fullname is required' })
  @Length(3, 50, { message: 'Fullname must be between 3 and 50 characters' })
  fullname: string;

  @IsEmail()
  @IsNotEmpty({message: 'Email is required'})
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20, { message: 'Password must be between 6 and 20 characters' })
  password: string;

  @IsOptional()
  @IsString()
  avatar?: string;
  @IsOptional()
  @IsString()
  @IsIn(['male','female'],{message: 'Gender must be either male or female'})
  gender?: string;
  @IsOptional()
  @IsString()
  address?: string;
  @IsOptional()
  @IsString()
  @IsIn(['admin', 'user'], { message: 'Role must be either admin or user' })
  role: string;
  @IsOptional()
  @IsString()
  @IsIn(['active', 'inactive'], { message: 'Status must be either active or inactive' })
  status: string;
}
