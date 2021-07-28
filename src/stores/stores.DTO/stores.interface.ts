import { ArgsType, Field, Int, InterfaceType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ArgsType()
@InterfaceType()
export class storesInterface {
    
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    @IsNumber()
    id : number;
    
    @Field()
    @Column()
    @IsString()
    name : string;

    @Field({nullable : true})
    @Column({nullable : true})
    @IsString()
    address : string;

}