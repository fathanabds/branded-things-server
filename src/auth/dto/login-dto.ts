import { IsDefined, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsDefined({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsDefined({ message: 'Password is required' })
  password: string;
}
