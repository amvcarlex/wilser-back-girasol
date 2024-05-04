import { JwtPayload } from 'jsonwebtoken'
import { ROLES } from '../enum/access.enum'

export interface IAuth {
    payload: JwtPayload
    secrete: string
    expiresIn: number | string
}

export interface IPayloadToken {
    role: ROLES
    sub: string
}

export interface IAuthTokenResult {
    role: string;
    sub:  string;
    iat:  number;
    exp:  number;
}

export interface IUseToken {
    role: string;
    sub:  string;
    isExpired: boolean
}

