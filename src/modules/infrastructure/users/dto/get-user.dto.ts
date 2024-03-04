import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({ description: "ID do usuário", example: "c77845fe-4519-44b0-9edf-69816cf8ab89" })
  id: string;

  @ApiProperty({ description: "Nome do usuário", example: "Nome do Usuário" })
  nome: string;

  @ApiProperty({ description: "Email do usuário", example: "usuario@email.com" })
  email: string;

  @ApiProperty({ description: "Senha do usuário", example: "senhaSegura123" })
  senha: string;

  @ApiProperty({ description: "Data de criação do usuário", example: "2024-03-04T04:37:36.676Z" })
  criado_em: Date;

  @ApiProperty({ description: "Data de deleção do usuário", example: null })
  deletado_em: Date | null;

  @ApiProperty({ description: "Data de atualização do usuário", example: "2024-03-04T04:37:36.676Z" })
  atualizado_em: Date;
}