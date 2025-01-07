import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const userData = this.userRepository.create(createUserDto);
      return await this.userRepository.save(userData);
    } catch (error) {
      console.log(error);
      if (error instanceof QueryFailedError) {
        if (error.driverError.code == '23505') {
          throw new HttpException('Email must be unique', 400);
        }
      }
    }
  }

  findById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }
}
