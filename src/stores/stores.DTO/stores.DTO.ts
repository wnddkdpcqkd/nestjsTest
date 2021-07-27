import { Args, ArgsType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import { storesInterface } from './stores.Interface'

@ArgsType()
export class StoresDTO extends PartialType(
    PickType(storesInterface,['name','address']), ArgsType) {}
