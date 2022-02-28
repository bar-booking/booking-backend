import { Controller, Get, UseGuards, Request } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'

import { JwtAuthGuard } from 'auth/guards/jwt-auth.guard'

import { UsersService } from './users.service'

@Controller(`users`)
@ApiTags(`users`)
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(`me`)
  findMe(@Request() req) {
    return this.usersService.findOne(req.user.phoneNumber)
  }
}
