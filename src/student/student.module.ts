// import { StudentService } from './student.service';
// import { StudentResolver } from './student.resolver';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Student } from './student.entity';
// import { Module } from '@nestjs/common';
// @Module({
//   imports:[
//     TypeOrmModule.forFeature(
//         /*In the submodules of your application it's going to be for each year and here you specify an array of Entities
//         and then you will be able to inject those entities repositories into your other component of the module
//         */
//     [Student]
//     ),
// ],
// providers: [
//     StudentResolver, 
//     StudentService],
// exports: [StudentService] // Allow to export the provider within the modules, if any other module that imports this module and inject that
// })
// export class StudentModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [StudentResolver, StudentService],
  exports: [StudentService]
})
export class StudentModule {}
