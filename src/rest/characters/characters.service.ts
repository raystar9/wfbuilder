import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {
    characterRepository.create();
  }

  async create(createCharacterDto: CreateCharacterDto) {
    const res = await this.characterRepository.findOneBy({id:createCharacterDto.id});
    if(!res) {
      this.characterRepository.save(createCharacterDto);
    }
  }

  findAll() {
    const queryRunner = this.characterRepository.createQueryBuilder("character");
    queryRunner.orderBy("stars desc, type, id")
    return queryRunner.getMany();
  }

  findOne(id: string) {
    return this.characterRepository.findBy({id});
  }

  async update(id: string, updateCharacterDto: UpdateCharacterDto) {
    const res = await this.characterRepository.findOneBy({id:updateCharacterDto.id});
    if(res) {
      this.characterRepository.save(updateCharacterDto);
    }
  }

  remove(id: string) {
    this.characterRepository.delete({id});
  }
}
