import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class SignUpRequest {
  @IsNotEmpty()
  @Length(3, 20)
  firstName: string;
  @IsNotEmpty()
  @Length(3, 20)
  lastName: string;
  @IsEmail()
  email: string;
  @Length(8, 20)
  password: string;
  avatar: string;
}
export class LoginRequest {
  @IsEmail()
  email: string;
  @Length(8, 20)
  password: string;
}
export class RefreshTokenRequest {
  @IsNotEmpty()
  refreshToken: string;
  @IsNotEmpty()
  accessToken: string;
}
