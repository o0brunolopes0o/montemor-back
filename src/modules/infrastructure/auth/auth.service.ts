import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UserService, // Injete o serviço de usuários
  ) {}

  async validateUser(nome: string, senha: string): Promise<any> {
    const user = await this.usersService.findByNome(nome);
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async generateToken(user: any) {
    const payload = { nome: user.nome, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}