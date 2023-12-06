import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { AccountService } from './account.service';
import {
  LoginRequest,
  RefreshTokenRequest,
  SignUpRequest,
} from './dtos/account.request';
import { TokenResponse } from './dtos/account.response';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/role.guard';
import { Roles } from './decorators/role.decorator';
@Controller('auth')
export default class AuthController {
  constructor(private accountService: AccountService) {}
  @Post('register')
  async register(@Body() signUpRequest: SignUpRequest) {
    return this.accountService.create(signUpRequest);
  }
  @Post('login')
  @HttpCode(200)
  async login(@Body() loginRequest: LoginRequest) {
    return this.accountService.login(loginRequest);
  }
  @Post('refresh-token')
  @HttpCode(200)
  async refreshToken(
    @Body() refreshTokenRequest: RefreshTokenRequest,
  ): Promise<TokenResponse> {
    return this.accountService.refreshNewToken(refreshTokenRequest);
  }

  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('USER')
  async findAll() {
    return this.accountService.findAll();
  }
}
