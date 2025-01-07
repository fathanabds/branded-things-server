import {
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { Role } from 'src/enums/roles.enum';

export class CreateUserDto {
  username: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsDefined({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsDefined({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;

  @IsEnum(['admin', 'staff'], { message: 'Role must be either admin or staff' })
  @IsNotEmpty({ message: 'Role is required' })
  @IsDefined({ message: 'Role is required' })
  role: Role;

  phoneNumber: string;

  address: string;
}
