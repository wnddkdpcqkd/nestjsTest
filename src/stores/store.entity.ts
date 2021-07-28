import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Pet } from "src/pets/pet.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { storesInterface } from "./stores.DTO/stores.interface";
@ObjectType()
@Entity()
export class Store extends storesInterface{

    @Field(() => [Pet])
    @OneToMany(() => Pet , (pet) => pet.store, {cascade: true})
    @JoinColumn({name : 'id', referencedColumnName : 'store_id'})
    Pets : Pet[]

}