import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ACCESS_LEVEL_KEY, ADMIN_KEY, PUBLIC_KEY, ROLES_KEY } from 'src/constant';
import { ACCESS_LEVEL, ROLES } from '../enum/access.enum';
import { UsersService } from 'src/mod/users/users.service';

@Injectable()
export class AccessLevelGuard implements CanActivate {
  constructor(
    private readonly _userService: UsersService,
    private readonly reflector: Reflector
  ) { }
  async canActivate(
    context: ExecutionContext,
  ) {
    const isPublic = this.reflector.get<boolean>(PUBLIC_KEY, context.getHandler)
    if (isPublic) return true
    const roles = this.reflector.get<Array<keyof typeof ROLES>>(ROLES_KEY, context.getHandler)
    const admin = this.reflector.get<string>(ADMIN_KEY, context.getHandler)
    const accessLevel = this.reflector.get<number>(ACCESS_LEVEL_KEY, context.getHandler)

    const req = context.switchToHttp().getRequest<Request>()
    const { roleUser, userID } = req
    if (accessLevel === undefined) {
      if (roles === undefined) {
        if (!admin) return true
        else if (admin && roleUser === admin) return true
      }
      else
        throw new UnauthorizedException(`YOU DON'T HAVE PERMISSIONS`)
    }

    if (roleUser === ROLES.ADMINISTRATOR || roleUser === ROLES.SUPER_ADMINISTRATOR) {
      return true
    }

    const user = await this._userService.findOne(userID)
    /* Lógica para los niveles de acceso por entidad */



    //ejemplo de comparación
    if (+ACCESS_LEVEL[accessLevel] > 100) {
      throw new UnauthorizedException(`YOU DON'T HAVE PERMISSIONS`)
    }
    /* fin */

    return true;
  }
}
