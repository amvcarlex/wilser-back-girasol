import { SetMetadata } from "@nestjs/common";
import { ADMIN_KEY } from "src/constant";
import { ROLES } from "../enum/access.enum";

export const AdminAccess = () => SetMetadata(ADMIN_KEY, ROLES.ADMINISTRATOR)