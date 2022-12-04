import { IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLinkDto {
  @ApiProperty({
    description: 'Полный URL ссылки, для генерации короткой ссылки',
    example: 'https://www.google.com',
  })
  @IsUrl()
  link: string;
}
