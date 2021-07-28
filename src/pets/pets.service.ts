import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { petsDTO } from './pets.DTO/pets.DTO';

@Injectable()
export class PetsService {
    
    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}

    createPet(petsDTO : petsDTO) : Promise<Pet> {
        const newPet  = this.petsRepository.create(petsDTO);
        
        return this.petsRepository.save(newPet);
    }

    async findAll(): Promise<Pet[]> {
        return this.petsRepository.find({
            relations: ['store'],
        });
    }
}
