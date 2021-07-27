import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { storesInterface } from "./stores.DTO/stores.interface";
@ObjectType()
@Entity()
export class Store extends storesInterface{
}