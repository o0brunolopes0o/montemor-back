import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../users/service/user.service'; // Importe UserService
import { JwtModule } from '@nestjs/jwt'; // Importe JwtModule
import { TypeOrmModule } from '@nestjs/typeorm'; // Importe TypeOrmModule
import User from '../users/entity/user.entity';
import { AuthController } from './controller/auth.controller';


@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey', // Substitua por sua chave secreta
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([User]), // Adicione isso
    // Se UserService é fornecido em outro módulo, importe esse módulo aqui
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService], // Adicione UserService aos provedores
  exports: [AuthService], // Exporte AuthService se for usado em outros módulos
})
export class AuthModule {}