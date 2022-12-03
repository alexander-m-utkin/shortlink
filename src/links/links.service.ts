import { Injectable } from '@nestjs/common';
import { Link } from './link.entity';
import { CreateLinkDto } from './dto/create-link.dto';
import { createHash } from 'crypto';
import { ConfigService } from '@nestjs/config';
import { LinkRepository } from './link.repository';

@Injectable()
export class LinksService {
  constructor(
    private linksRepository: LinkRepository,
    private config: ConfigService,
  ) {}

  findOneLinkUrlByShortLink(shortLink: string): Promise<string> {
    return this.linksRepository.getLinkUrlByShortLink(shortLink);
  }

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const link = new Link();
    link.link = createLinkDto.link;
    link.shortLink = generateShortLink(link.link);
    link.fullShortLink = `${this.config.get<string>('BASE_URL')}/${
      link.shortLink
    }`;
    await this.linksRepository.upsert(link, ['shortLink']);
    return link;
  }
}

export function generateShortLink(link: string): string {
  return createHash('md5')
    .update(link)
    .digest('base64')
    .replace(/[/+]+/g, '')
    .substring(0, 10);
}
