import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';
import { SerializerInterceptor } from 'src/interceptor/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
@Controller('/api/v1/users')
export class UsersController {
  constructor(public usersService: UsersService) {}
  @Get()
  allUsers() {
    return this.usersService.findAll();
  }

  @Get('email')
  async findAllUser(@Query('email') email: string) {
    return await this.usersService.find(email);
  }

  @UseInterceptors(new SerializerInterceptor(UserDto))
  @Get('/:id')
  async oneUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.usersService.findOne(id);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    let result = await this.usersService.create(body.email, body.password);
    console.log(result);

    return 'success';
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    let result5 = await this.usersService.remove(id);
    return 'delete success';
  }
}
