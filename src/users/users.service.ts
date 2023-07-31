import { UpdatePhotoDto } from './../photos/dtos/createPhoto.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dtos/createUser.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  find(email: string) {
    return this.usersRepository.find({ where: { email } });
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  create(email: string, password: string): Promise<User> {
    const newUser = this.usersRepository.create({ email, password });
    console.log(newUser);
    return this.usersRepository.save(newUser);
  }

  async update(id: string, updateUserDto: any) {
    console.log(id);
    const findUser = await this.usersRepository.findOneBy({ id });
    console.log(updateUserDto);
    findUser.email = updateUserDto.email;
    findUser.password = updateUserDto.password;
    return await this.usersRepository.save(findUser);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.usersRepository.remove(user);
  }
}
