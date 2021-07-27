import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Pet {
    
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id : number;

    @Field()
    @Column()
    name : string;
    
    @Field({nullable : true})
    @Column({nullable : true})
    petType? : string;
}