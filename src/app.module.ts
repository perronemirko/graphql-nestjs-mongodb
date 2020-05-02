import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      username: 'root',
      password: 'example',
      host: '0.0.0.0',
      port: 27017,
      database: 'school',
      useUnifiedTopology: true,
      synchronize: true,

      entities: [
        Lesson,
        Student,
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true, // tell nestjs to save the schema in memory and regenerate every time we started the NGS application.
    }),
    LessonModule,
    StudentModule,  
  ],

})
export class AppModule {}
