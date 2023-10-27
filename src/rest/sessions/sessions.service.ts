import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './entities/session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SessionsService {
  constructor(@InjectRepository(Session) private sessionRepository:Repository<Session>) {
    sessionRepository.create();
  }

  async setSession(accountId:string, sessionKey:string) {
    const befSession = await this.sessionRepository.findOneBy({id:accountId});
    if(befSession) {
      this.sessionRepository.update({
          id:accountId,
        },
        {
          sessionKey,
          lastReqDate:new Date()
        }
      )
    } else {
      this.sessionRepository.save({
        id:accountId,
        sessionKey,
        lastReqDate:new Date()
      })
    }
  }

  create(createSessionDto: CreateSessionDto) {
    return 'This action adds a new session';
  }

  findAll() {
    return `This action returns all sessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
