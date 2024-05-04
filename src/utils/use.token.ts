import { decode } from 'jsonwebtoken'
import { IAuthTokenResult, IUseToken } from 'src/mod/auth/interface/auth.interface'

export const useToken = (token: string): IUseToken | string => {
    try {
        const data = decode(token) as IAuthTokenResult
        const currentDate = new Date()
        const expiredDate = new Date(data.exp)
        return {
            sub: data.sub,
            role: data.role,
            isExpired: +expiredDate <= +currentDate / 1000
        }
    } catch (error) {
        return 'TOKEN IS INVALID'
    }
}