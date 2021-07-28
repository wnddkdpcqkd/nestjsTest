import { Args, ArgsType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import { petsInterface } from './pets.Interface'

@ArgsType()
export class petsDTO extends PartialType(
    PickType(petsInterface,['name','petType','store_id']), ArgsType
) {}
