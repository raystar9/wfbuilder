import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemOptionsService } from './item-options.service';
import { CreateItemOptionDto } from './dto/create-item-option.dto';
import { UpdateItemOptionDto } from './dto/update-item-option.dto';

@Controller('rest/item-options')
export class ItemOptionsController {
  constructor(private readonly itemOptionsService: ItemOptionsService) {}

  @Post()
  create(@Body() createItemOptionDto: CreateItemOptionDto) {
    return this.itemOptionsService.create(createItemOptionDto);
  }

  @Get()
  findAll() {
    return this.itemOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemOptionDto: UpdateItemOptionDto) {
    return this.itemOptionsService.update(+id, updateItemOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemOptionsService.remove(+id);
  }
}
