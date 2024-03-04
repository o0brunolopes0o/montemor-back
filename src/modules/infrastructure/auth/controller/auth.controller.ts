import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger'; // Importe ApiBody
import { AuthService } from '../auth.service';

class LoginUserDto { // Defina a forma do objeto user
  username: string;
  password: string;
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: LoginUserDto }) // Use ApiBody aqui
  @ApiResponse({ status: 200, description: 'Conexão bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Conexão falhou.' })
  @Post('/login')
  async login(@Body() user: LoginUserDto) { // Use LoginUserDto aqui
    const userFound = await this.authService.validateUser(user.username, user.password);
    if (userFound === null) {
      throw new UnauthorizedException();
    }
    return await this.authService.generateToken(userFound);
  }
}