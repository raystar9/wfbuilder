import { Injectable } from '@nestjs/common';
import { CreateItemOptionDto } from './dto/create-item-option.dto';
import { UpdateItemOptionDto } from './dto/update-item-option.dto';
import { ItemOption } from './entities/item-option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemOptionsService {
  constructor(
    @InjectRepository(ItemOption)
    private itemOptionRepository: Repository<ItemOption>,
  ) {}

  create(createItemOptionDto: CreateItemOptionDto) {
    return 'This action adds a new itemOption';
  }

  findAll() {
    return `This action returns all itemOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemOption`;
  }

  update(id: number, updateItemOptionDto: UpdateItemOptionDto) {
    return `This action updates a #${id} itemOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemOption`;
  }
}
