import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { PUBLIC_KEY } from 'src/constant';
import { UsersService } from 'src/mod/users/users.service';
import { useToken } from 'src/utils/use.token';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _userService: UsersService,
    private readonly reflector: Reflector
  ) {}
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(PUBLIC_KEY, context.getHandler)
    if (isPublic) return true

    const req = context.switchToHttp().getRequest<Request>()
    const token = req.headers['access_token']
    if (!token || Array.isArray(token)) throw new UnauthorizedException('INVALID TOKEN')

    const manageToken = useToken(token)
    if (typeof manageToken === 'string') throw new UnauthorizedException(manageToken)

    if (manageToken.isExpired) throw new UnauthorizedException('TOKEN EXPIRED')

    const { sub } = manageToken
/* 
    const user = await this._userService.findOneBy({ key: 'userID', value: sub })
    if (!user) throw new UnauthorizedException('USER INVALID')
    req.userID = user.userID
    req.roleUser = user.role */
    
    return true;
  }
}
