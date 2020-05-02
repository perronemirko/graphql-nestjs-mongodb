import { InputType, Field, ID } from "@nestjs/graphql";
import { MinLength, IsDateString, IsUUID } from "class-validator";

@InputType()
export class CreateLessonInput {

    @Field()
    @MinLength(1)
    name: string;

    @Field()
    @IsDateString()
    startDate: string;

    @Field()
    @IsDateString()
    endDate: string;

    @IsUUID("4", {each: true}) // Means that check if we have an array of uuid of type v4
    @Field(()=> [ID], {defaultValue:[]})
    students: string[];

}