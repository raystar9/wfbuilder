import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CodesService } from './codes.service';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';

@Controller('rest/codes')
export class CodesController {
  constructor(private readonly codesService: CodesService) {}

  @Post()
  create(@Body() createCodeDto: CreateCodeDto) {
    return this.codesService.create(createCodeDto);
  }

  @Get()
  findAll() {
    return this.codesService.findAll();
  }

  @Get(':id')
  findCodes(@Param('id') codeKind: string) {
    return this.codesService.findCodes(codeKind);
  }

  // @Get(':id')
  // findOne(@Param('id') codeKind: string, @Query() key:string) {
  //   return this.codesService.findOne(codeKind, key);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodeDto: UpdateCodeDto) {
    return this.codesService.update(+id, updateCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codesService.remove(+id);
  }
}
