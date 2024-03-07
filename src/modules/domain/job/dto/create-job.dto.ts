import { ApiProperty } from '@nestjs/swagger';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class CreateJobDto {
  @ApiProperty({ description: "Título da vaga", example: "Vaga TI" })
  @JoiSchema(["CREATE"], Joi.string().required())
  titulo: string;

  @ApiProperty({ description: "Descrição da vaga", example: "Vaga tempo integral seg à sexta" })
  @JoiSchema(["CREATE"], Joi.string().required())
  descricao: string;
}