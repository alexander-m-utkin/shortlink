import { IsAlphanumeric } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetLinkDto {
  @ApiProperty({
    description: 'Код короткой ссылки',
    example: 'j3vveyVa1l',
  })
  @IsAlphanumeric()
  shortLink: string;
}
