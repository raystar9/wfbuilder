import { Injectable } from '@nestjs/common';
import { CreateCharacterOptionDto } from './dto/create-character-option.dto';
import { UpdateCharacterOptionDto } from './dto/update-character-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacterOption } from './entities/character-option.entity';

@Injectable()
export class CharacterOptionsService {
  constructor(
    @InjectRepository(CharacterOption)
    private characterOptionRepository: Repository<CharacterOption>,
  ) {}

  create(createCharacterOptionDto: CreateCharacterOptionDto) {
    return 'This action adds a new characterOption';
  }

  findAll() {
    return `This action returns all characterOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characterOption`;
  }

  update(id: number, updateCharacterOptionDto: UpdateCharacterOptionDto) {
    return `This action updates a #${id} characterOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterOption`;
  }
}
