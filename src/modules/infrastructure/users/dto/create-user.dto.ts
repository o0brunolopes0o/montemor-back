import { ApiProperty } from '@nestjs/swagger';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class CreateUserDto {
  @ApiProperty({ description: "Nome do usuário", example: "Nome do Usuário" })
  @JoiSchema(["CREATE"], Joi.string().required())
  nome: string;

  @ApiProperty({ description: "Email do usuário", example: "usuario@email.com" })
  @JoiSchema(["CREATE"], Joi.string().required())
  email: string;

  @ApiProperty({ description: "Senha do usuário", example: "senhaSegura123" })
  @JoiSchema(["CREATE"], Joi.string().required())
  senha: string;
}