import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterOptionDto } from './create-character-option.dto';

export class UpdateCharacterOptionDto extends PartialType(CreateCharacterOptionDto) {}
