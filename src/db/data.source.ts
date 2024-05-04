import { ConfigModule, ConfigService } from '@nestjs/config';
import { CONFIG } from 'src/conf/keys';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
    envFilePath: '.env',
});

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
    type: 'mysql',
    host: configService.get<string>(CONFIG.HOST),
    port: parseInt(configService.get<string>(CONFIG.PORT)),
    username: configService.get<string>(CONFIG.USER_NAME),
    password: configService.get<string>(CONFIG.PASSWORD),
    database: configService.get<string>(CONFIG.DATABASE),
    entities: [__dirname + '/../**/**/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: true, //develonment true
    /* migrationsRun: false, */
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);