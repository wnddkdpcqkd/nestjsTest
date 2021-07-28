import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { GraphqlSettingModule } from './graphql-setting/graphql-setting.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresModule } from './stores/stores.module';
@Module({
  imports: [
    GraphqlSettingModule,
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : 'localhost',
      port : 3306,
      username : 'root',
      password : '1234',
      database : 'test',
      entities : ['dist/**/*.entity{.ts,.js}'],
      // migrations : ????
      synchronize : true,
      // logging : true,
    }),
    PetsModule,
    StoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
