import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DatabaseService } from './database.service';

@ApiTags('Database')
@Controller('database')
export class DatabaseController {
  constructor(private readonly appService: DatabaseService) {}

  @ApiResponse({ status: 200, description: 'Conexão bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Conexão falhou.' })
  @Get('/test-connection')
  async testConnection(): Promise<string> {
    return await this.appService.testConnection();
  }
}