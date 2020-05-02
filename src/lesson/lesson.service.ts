import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.inuput';

@Injectable()
export class LessonService {

    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>, // What you're typing is going to inject a lesson repository
    ){}


    async getLesson(id: string): Promise<Lesson> {
        return this.lessonRepository.findOne({ id }); // Curly bracers because if u don't it will searching for mongoid instead of ours id
        // throw new Error("Method not implemented.");
    }

    async getLessons(): Promise<Lesson[]>{
        return await this.lessonRepository.find();
        // throw new Error("Method not implemented.");
    }
    
    async createLesson(createLessonInput: CreateLessonInput ): Promise<Lesson> {

        // const lesson = this.lessonRepository.create();
        // lesson.name = name;
        // lesson.id = uuid();
        // lesson.startDate = startDate;
        // lesson.endDate = endDate;

        const { name, startDate, endDate, students } = createLessonInput;

        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate,
            students
        });

        return await this.lessonRepository.save(lesson);

    }

    async assignStudentsToLesson(lessonId: string, studentIds: string[]): Promise<Lesson> {

        const lesson = await this.lessonRepository.findOne( { id: lessonId }); 
        lesson.students = [...lesson.students, ...studentIds]
        return this.lessonRepository.save(lesson);
    }

}
