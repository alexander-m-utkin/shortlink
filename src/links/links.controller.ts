import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Response,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinksService } from './links.service';
import { GetLinkDto } from './dto/get-link.dto';

@Controller('')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto): Promise<string> {
    return (await this.linksService.create(createLinkDto)).fullShortLink;
  }

  @Get(':shortLink')
  async getLinkRedirect(
    @Param() shortLink: GetLinkDto,
    @Response() res,
  ): Promise<void> {
    const link = await this.linksService.findOneByShortLink(
      shortLink.shortLink,
    );

    if (link === null) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    res.redirect(301, link.link);
  }
}
