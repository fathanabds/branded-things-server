import { HttpException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { comparePassword } from 'src/helpers/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findOneBy({ email: loginDto.email });
    if (!user) {
      throw new HttpException('Invalid email/password', 401);
    }
    const isValidPassword = comparePassword(loginDto.password, user.password);
    if (!isValidPassword) {
      throw new HttpException('Invalid email/password', 401);
    }
    const access_token = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
    });
    return { access_token };
  }
}
