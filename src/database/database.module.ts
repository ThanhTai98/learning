import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.getOrThrow('APP_DB_HOST'),
                port: configService.getOrThrow('APP_DB_PORT'),
                database: configService.getOrThrow('APP_DB_NAME'),
                username: configService.getOrThrow('APP_DB_USERNAME'),
                password: configService.getOrThrow('APP_DB_PASS'),
                autoLoadEntities: true,
                synchronize: false
            }),
        inject: [ConfigService] 
        }),
    ]
})
export class DatabaseModule {}
