import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/user')
export class UserController {
    
    constructor(private readonly userService: UserService) {}
    @Post()
    @ApiOperation({summary: "Crear usuario"})
    create(@Body() userDTO: UserDTO) {
      return this.userService.create(userDTO);
    }

    @Get()
    @ApiOperation({summary: "Obtener todos los usuario"})
    findAll() {
      return this.userService.findAll();
    }
    
    @Get(':id')
    @ApiOperation({summary: "Obtener usuario por ID"})
    findOne(@Param('id') id: string) {
      return this.userService.findOne(id);
    }  

    @Put(':id')
    @ApiOperation({summary: "Actualizar usuario"})
    update(@Param('id') id: string, @Body() userDTO: UserDTO) {
      return this.userService.update(id, userDTO);
    }
}
