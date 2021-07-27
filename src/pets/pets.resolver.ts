import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { petsDTO } from './pets.DTO/pets.DTO';
import { PetsService } from './pets.service';

@Resolver(() => Pet)
export class PetsResolver {
    constructor(private petsService : PetsService) {}

    @Query(() => [Pet])
    pets(): Promise<Pet[]> {
        return this.petsService.findAll();
    }
    
    @Mutation(returns => Pet)
    createPet(@Args() petsDTO : petsDTO) : Promise<Pet> {
        return this.petsService.createPet(petsDTO)
    }
}
