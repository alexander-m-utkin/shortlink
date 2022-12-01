import { IsAlphanumeric } from 'class-validator';

export class GetLinkDto {
  @IsAlphanumeric()
  shortLink: string;
}
