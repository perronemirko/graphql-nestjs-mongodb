import { Resolver, Mutation } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { Query } from "@nestjs/graphql";

@Resolver(of => LessonType)
export class LessonResolver {

    @Query(returns => LessonType)
    lesson(){
        return {
            id: 'asdfgjntlkhtgfds',
            name: 'Phisics Class ',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString(),
        }
    }

    @Mutation(returns => LessonType )
    createLesson(){

    }


}