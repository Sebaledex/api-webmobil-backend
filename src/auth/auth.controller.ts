import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/dto/user.dto';


@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('signin')
    async signin(@Req() req){
        return await this.authService.singIn(req.user);
    }

    @Post('signup')
    async signUp(@Body() userDTO:UserDTO){
        return await this.authService.singUp(userDTO)
    }
}
