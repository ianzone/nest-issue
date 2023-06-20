import {
  Body,
  Controller,
  Delete,
  Get,
  Head,
  Options,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Head('rsvp')
  hRsvp() {
    return 'Head rsvp!';
  }

  @Options('rsvp')
  oRsvp() {
    return 'Options rsvp';
  }

  @Get('rsvp')
  gRsvp() {
    return 'Get rsvp';
  }

  @Post('rsvp')
  pRsvp() {
    return 'Post rsvp';
  }

  @Put('rsvp')
  puRsvp() {
    return 'Put rsvp';
  }

  @Patch('rsvp')
  ptRsvp() {
    return 'Patch rsvp';
  }

  @Delete('rsvp')
  dRsvp() {
    return 'Delete rsvp';
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
