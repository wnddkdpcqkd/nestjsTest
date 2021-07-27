import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './store.entity'
@Module({
  imports : [TypeOrmModule.forFeature([Store])],
  providers: [StoresService, StoresResolver]
})
export class StoresModule {}
