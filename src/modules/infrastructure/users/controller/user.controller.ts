import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from '../dto/update-user.dto';
import { GetUserDto } from '../dto/get-user.dto';

@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}



  @ApiOkResponse({ type: GetUserDto })
  @Get('/get')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOkResponse({ type: GetUserDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post('/create')
  @ApiBody({ type: CreateUserDto })
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put('/update:id')
  @ApiBody({ type: UpdateUserDto })
  update(@Param('id') id: string, @Body() user: User): Promise<void> {
    return this.userService.update(id, user);
  }

  @Delete('/delete:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}