import { ApiProperty } from '@nestjs/swagger';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateUserDto {
  @ApiProperty({ description: "Nome do usuário", example: "Nome do Usuário" })
  @JoiSchema(["UPDATE"], Joi.string().required())
  nome: string;

  @ApiProperty({ description: "Email do usuário", example: "usuario@email.com" })
  @JoiSchema(["UPDATE"], Joi.string().required())
  email: string;

  @ApiProperty({ description: "Senha do usuário", example: "senhaSegura123" })
  @JoiSchema(["UPDATE"], Joi.string().required())
  senha: string;
}