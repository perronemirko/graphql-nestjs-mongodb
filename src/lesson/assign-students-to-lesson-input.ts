import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
    @IsUUID()
    @Field(type => ID)
    lessonId: string;


    @IsUUID("4", {each: true}) // Means that check if we have an array of uuid of type v4
    @Field(type => [ID])
    studentIds: string[];
}