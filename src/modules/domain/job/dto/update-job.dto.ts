import { ApiProperty } from '@nestjs/swagger';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class UpdateJobDto {
  @ApiProperty({ description: "Título da vaga", example: "Vaga TI" })
  @JoiSchema(["UPDATE"], Joi.string().required())
  titulo: string;

  @ApiProperty({ description: "Descrição da vaga", example: "Vaga tempo integral seg à sexta" })
  @JoiSchema(["UPDATE"], Joi.string().required())
  descricao: string;
}