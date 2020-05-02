import { Resolver, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { Query } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.inuput";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson-input";
import { Lesson } from "./lesson.entity";
import { StudentService } from "../student/student.service";

@Resolver(of => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService,
        private studentService: StudentService
    ) {}

    @Query(returns => [LessonType]) // [LessonType] syntaxt in order to retrieve an array of lesson type instead of LessonType[]
    getLessons(
        ){
        return this.lessonService.getLessons();
    }



    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string,
        // @Args('name') name?: string,
        // @Args('startDate') startDate?: string,
        // @Args('endDate') endDate?: string,
        ){
        return this.lessonService.getLesson(id);
        //return {
        //     id: 'asdfgjntlkhtgfds',
        //     name: 'Phisics Class ',
        //     startDate: (new Date()).toISOString(),
        //     endDate: (new Date()).toISOString(),
        // }
    }

    @Mutation(returns => LessonType )
    createLesson( 
        // @Args('name') name: string,
        // @Args('startDate') startDate: string,
        // @Args('endDate') endDate: string,
        @Args('createLessonInput') createLessonInput: CreateLessonInput
        ){
            return this.lessonService.createLesson(createLessonInput);
    }


    @Mutation(returns => LessonType )
    assignStudentsToLesson( 
        // @Args('name') name: string,
        // @Args('startDate') startDate: string,
        // @Args('endDate') endDate: string,
        @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput
        ){
            const {lessonId, studentIds}= assignStudentsToLessonInput;
            return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
    }

    @ResolveField()
    async students(@Parent() lesson: Lesson){
        console.log(lesson);
        return await this.studentService.getManyStudents(lesson.students);
    }
}