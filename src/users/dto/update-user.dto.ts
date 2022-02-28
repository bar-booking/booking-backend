import { OmitType, PartialType } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto extends OmitType(PartialType(CreateUserDto), [
  `phoneNumber`,
]) {
  @IsNotEmpty()
  @IsString()
  name: string
}
