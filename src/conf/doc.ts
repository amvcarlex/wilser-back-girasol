import { DocumentBuilder } from "@nestjs/swagger";

export const SW = new DocumentBuilder()
    .setTitle('GIRASOL')
    .setDescription('API TEST GIRASOL ENTERPRISE')
    .setVersion('1.0')
    /* .addTag('cats') */
    .build();