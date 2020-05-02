import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { StudentModule } from 'src/student/student.module';


@Module({
    imports:[
        /*In the submodules of your application it's going to be for each year and here you specify an array of Entities
        and then you will be able to inject those entities repositories into your other component of the module
        */
        TypeOrmModule.forFeature([Lesson]),
        StudentModule,
    ],
    providers: [
        LessonResolver, 
        LessonService
    ]
})
export class LessonModule {}