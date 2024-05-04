import { SetMetadata } from "@nestjs/common";
import { ROLES } from "../enum/access.enum";
import { ROLES_KEY } from "src/constant";
export const RolesAccess = (...roles: Array<keyof typeof ROLES>) => SetMetadata(ROLES_KEY, roles)