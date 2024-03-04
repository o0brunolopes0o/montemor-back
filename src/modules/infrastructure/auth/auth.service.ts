import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/service/user.service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
  constructor(
    private jwtService: JwtService,
    private usersService: UserService,
  ) {    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // Substitua pela sua chave secreta
    });
  }

  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user || user.senha !== senha) {
      throw new UnauthorizedException('Usuário ou senha inválido.');
    }
    const { senha: userSenha, ...result } = user;
    return result;
  }

  async generateToken(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validate(payload: any) {
    const user = await this.usersService.findByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}