import { ApiProperty } from '@nestjs/swagger';

export class GetJobDto {
  @ApiProperty({ description: "ID da vaga", example: "c77845fe-4519-44b0-9edf-69816cf8ab89" })
  id: string;

  @ApiProperty({ description: "Título da vaga", example: "Vaga TI" })
  titulo: string;

  @ApiProperty({ description: "Descrição da vaga", example: "Vaga tempo integral seg à sexta" })
  descricao: string;

  @ApiProperty({ description: "Data de criação do usuário", example: "2024-03-04T04:37:36.676Z" })
  criado_em: Date;

  @ApiProperty({ description: "Data de deleção do usuário", example: null })
  deletado_em: Date | null;

  @ApiProperty({ description: "Data de atualização do usuário", example: "2024-03-04T04:37:36.676Z" })
  atualizado_em: Date;
}