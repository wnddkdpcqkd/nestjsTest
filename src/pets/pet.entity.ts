import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Store } from "src/stores/store.entity";
import { storesInterface } from "src/stores/stores.DTO/stores.interface";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { petsInterface } from "./pets.DTO/pets.Interface";

@ObjectType()
@Entity()
export class Pet extends petsInterface{

    @Field()
    @ManyToOne(type => Store , (store) => store.Pets)
    @JoinColumn({ name: 'store_id', referencedColumnName: 'id' })
    store : Store
    
    
}