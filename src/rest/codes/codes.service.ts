import { Injectable } from '@nestjs/common';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Code } from './entities/code.entity';

@Injectable()
export class CodesService {
  constructor(
    @InjectRepository(Code) private codeRepository: Repository<Code>,
  ) {
    codeRepository.create();
  }

  async create(createCodeDto: CreateCodeDto) {
    const res = await this.codeRepository.findOneBy({key:createCodeDto.key, codeKind:createCodeDto.codeKind});
    if(res) {
      this.codeRepository.update({key:createCodeDto.key, codeKind:createCodeDto.codeKind}, {name:createCodeDto.name})
    } else {
      this.codeRepository.save(createCodeDto);
    }
  }

  findAll() {
    return `This action returns all codes`;
  }

  findCodes(codeKind: string) {
    return this.codeRepository.findBy({codeKind});
  }

  findOne(codeKind: string, key: string) {
    return this.codeRepository.findOneBy({codeKind, key});
  }

  update(id: number, updateCodeDto: UpdateCodeDto) {
    return `This action updates a #${id} code`;
  }

  remove(id: number) {
    return `This action removes a #${id} code`;
  }
}
