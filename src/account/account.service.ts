import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './account.entity';
import {
  LoginRequest,
  RefreshTokenRequest,
  SignUpRequest,
} from './dtos/account.request';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { TokenResponse } from './dtos/account.response';
@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    private jwtService: JwtService,
  ) {}
  async create(account: SignUpRequest) {
    const existedAccount = await this.accountModel.findOne({
      email: account.email,
    });
    if (existedAccount) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }
    account.password = await bcrypt.hash(account.password, 10);
    const createdAccount = new this.accountModel(account);
    createdAccount.status = 'ACTIVE';
    createdAccount.role = 'USER';
    createdAccount.save();
  }
  async findOne(email: string) {
    return await this.accountModel.findOne({ email: email });
  }
  async generateTokenPair(account: any): Promise<TokenResponse> {
    const accessTokenPayload = { sub: account.id, role: account.role };
    const refreshTokenPayload = { sub: account.id };
    const accessToken = await this.jwtService.signAsync(accessTokenPayload, {
      secret: process.env.JWT_SECRET,
      algorithm: 'HS512',
      issuer: 'http://localhost:3000',
      expiresIn: process.env.ACCESS_TOKEN_LIFE_TIME,
    });
    const refreshToken = await this.jwtService.signAsync(refreshTokenPayload, {
      secret: process.env.JWT_SECRET,
      algorithm: 'HS512',
      expiresIn: process.env.REFRESH_TOKEN_LIFE_TIME,
    });
    return new TokenResponse(accessToken, refreshToken);
  }
  async login(loginRequest: LoginRequest) {
    const account = await this.accountModel.findOne({
      email: loginRequest.email,
    });
    if (!account) {
      throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
    } else if (
      !(await bcrypt.compare(loginRequest.password, account.password))
    ) {
      throw new HttpException(
        'Invalid username or password',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      // const payload = { sub: account.id };
      return await this.generateTokenPair(account);
    }
  }
  async refreshNewToken(
    refreshTokenRequest: RefreshTokenRequest,
  ): Promise<TokenResponse> {
    console.log(refreshTokenRequest);
    const payload = await this.jwtService.verifyAsync(
      refreshTokenRequest.refreshToken,
      {
        secret: process.env.JWT_SECRET,
        algorithms: ['HS512'],
      },
    );
    const account = await this.accountModel.findById(payload.sub);
    if (!account) {
      throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
    }
    return await this.generateTokenPair(account);
  }
  async findAll() {
    return await this.accountModel.find();
  }
  async findById(id: string) {
    return await this.accountModel.findById(id);
  }
}
