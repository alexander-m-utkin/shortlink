import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Link } from './link.entity';


@Injectable()
export class LinkRepository extends Repository<Link> {

  constructor(private dataSource: DataSource) {
    super(Link, dataSource.createEntityManager());
  }

  getLinkUrlByShortLink(shortLink: string): Promise<Link> {
    return this.createQueryBuilder('link')
      .select('link')
      .where('link.shortLink = :shortLink', { shortLink })
      .getOne();
  }
}