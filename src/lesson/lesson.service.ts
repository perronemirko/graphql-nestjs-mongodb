import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {

    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>, // What you're typing is going to inject a lesson repository
    ){}

    async createLesson(name, stratDate, endDate): Promise<Lesson> {

        // const lesson = this.lessonRepository.create({
        //     id: uuid(),
        //     name,
        //     stratDate,
        //     endDate
        // });
        const lesson = this.lessonRepository.create();
        lesson.name = name;
        lesson.id = uuid();
        lesson.startDate = stratDate;
        lesson.endDate = endDate;
        return await this.lessonRepository.save(lesson);

    }


}
