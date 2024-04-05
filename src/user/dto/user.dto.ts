import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsString()
  @Matches(/^(\d{2})\/(\d{2})\/(\d{4})$/, {
    message: 'El formato de fecha debe ser dd/mm/yyyy',
  })
  readonly birthday: string;

}
