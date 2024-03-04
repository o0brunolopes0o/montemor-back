import { ApiProperty } from '@nestjs/swagger';

class CreateUserDto {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  id: string;
}