import { Injectable } from '@nestjs/common';
import {option} from '../../config/encryptOption';
import {createHash} from 'crypto';

@Injectable()
export class EncryptService {
    encrypt(password:string) {
        let tempPassword = password;
        for(var i = 0; i < option.iteration; i++) {
            const hash = createHash("sha256");
            hash.update(option.salt + password);
            tempPassword = hash.digest("hex")
        }
        const encryptedPassword = tempPassword;
        return encryptedPassword;
    }
}
