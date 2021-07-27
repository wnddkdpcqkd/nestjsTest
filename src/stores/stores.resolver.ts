import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Store } from './store.entity';
import { StoresDTO } from './stores.DTO/Stores.DTO';
import { StoresService } from './stores.service';

@Resolver(() => Store)
export class StoresResolver {
    constructor(private StoresService : StoresService) {}

    @Query(() => [Store])
    Stores(): Promise<Store[]> {
        return this.StoresService.findAll();
    }
    
    @Mutation(returns => Store)
    createStore(@Args() StoresDTO : StoresDTO) : Promise<Store> {
        return this.StoresService.createStore(StoresDTO)
    }
}
