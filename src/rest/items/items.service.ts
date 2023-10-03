import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {
    itemRepository.create();
  }

  create(createItemDto: CreateItemDto) {
    return this.itemRepository.save(createItemDto);
  }

  findAll() {
    const queryBuilder = this.itemRepository.createQueryBuilder("item");
    let date = new Date();
    date.setDate(date.getDate() + 7)
    queryBuilder.where("releaseDate < :date", {date})
    return queryBuilder.getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
