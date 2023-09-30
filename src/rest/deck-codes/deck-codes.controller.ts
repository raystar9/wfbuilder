import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeckCodesService } from './deck-codes.service';
import { CreateDeckCodeDto } from './dto/create-deck-code.dto';
import { UpdateDeckCodeDto } from './dto/update-deck-code.dto';

@Controller('deck-codes')
export class DeckCodesController {
  constructor(private readonly deckCodesService: DeckCodesService) {}

  @Post()
  create(@Body() createDeckCodeDto: CreateDeckCodeDto) {
    if(Array.isArray(createDeckCodeDto) ) {
      return this.deckCodesService.create(createDeckCodeDto);
    } else {
      return this.deckCodesService.create([createDeckCodeDto]);
    }
  }

  @Get()
  findAll() {
    return this.deckCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deckCodesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeckCodeDto: UpdateDeckCodeDto) {
    return this.deckCodesService.update(+id, updateDeckCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deckCodesService.remove(+id);
  }
}
