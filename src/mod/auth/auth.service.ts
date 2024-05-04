import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/create-auth.dto';;

@Injectable()
export class AuthService {
  login(createAuthDto: AuthDto) {
    return 'This action adds a new auth';
  }
}
