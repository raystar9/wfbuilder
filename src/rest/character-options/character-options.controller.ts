import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterOptionsService } from './character-options.service';
import { CreateCharacterOptionDto } from './dto/create-character-option.dto';
import { UpdateCharacterOptionDto } from './dto/update-character-option.dto';

@Controller('rest/character-options')
export class CharacterOptionsController {
  constructor(private readonly characterOptionsService: CharacterOptionsService) {}

  @Post()
  create(@Body() createCharacterOptionDto: CreateCharacterOptionDto) {
    return this.characterOptionsService.create(createCharacterOptionDto);
  }

  @Get()
  findAll() {
    return this.characterOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterOptionDto: UpdateCharacterOptionDto) {
    return this.characterOptionsService.update(+id, updateCharacterOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterOptionsService.remove(+id);
  }
}
