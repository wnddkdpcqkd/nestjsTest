import { ArgsType, Field, Int, InterfaceType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";
import { Store } from "src/stores/store.entity";
import { Column, PrimaryGeneratedColumn } from "typeorm";


@ArgsType()
@InterfaceType()
export class petsInterface {
    
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    @IsNumber()
    id : number;
    
    @Field(type => String)
    @Column()
    @IsString()
    name : string;

    @Field({nullable : true})
    @Column()
    @IsString()
    petType : string;

    @Field({nullable : true})
    @Column()
    @IsNumber()
    store_id : number;
}