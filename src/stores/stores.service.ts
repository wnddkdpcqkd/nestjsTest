import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity';
import { StoresDTO } from './stores.DTO/stores.DTO'

@Injectable()
export class StoresService {
    
    constructor(@InjectRepository(Store) private storesRepository: Repository<Store>) {}

    createStore(storesDTO : StoresDTO) : Promise<Store> {
        const newStore = this.storesRepository.create(storesDTO);
        
        return this.storesRepository.save(newStore);
    }

    async findAll(): Promise<Store[]> {
        return this.storesRepository.find({
            relations: ['Pets'],
        });
    }
}
