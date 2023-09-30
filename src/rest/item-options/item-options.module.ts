import { Module } from '@nestjs/common';
import { ItemOptionsService } from './item-options.service';
import { ItemOptionsController } from './item-options.controller';
import { ItemOption } from './entities/item-option.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemOption])],
  controllers: [ItemOptionsController],
  providers: [ItemOptionsService],
})
export class ItemOptionsModule {}
