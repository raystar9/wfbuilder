import { PartialType } from '@nestjs/mapped-types';
import { CreateDeckCodeDto } from './create-deck-code.dto';

export class UpdateDeckCodeDto extends PartialType(CreateDeckCodeDto) {}
