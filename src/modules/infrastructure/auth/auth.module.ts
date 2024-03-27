import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../users/service/user.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../users/entity/user.entity';
import { AuthController } from './controller/auth.controller';
import { PassportModule } from '@nestjs/passport'; // Importe PassportModule

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN},
    }),
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService], // Replace JwtStrategy with JwtStrategyService
  exports: [AuthService],
})
export class AuthModule {}