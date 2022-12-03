import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { Link } from './link.entity';
import { LinkRepository } from './link.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  providers: [LinksService, LinkRepository],
  controllers: [LinksController],
})
export class LinksModule {}
