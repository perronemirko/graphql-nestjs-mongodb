import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { CreateStudentInput } from "./create-student.input";
import { Student } from "./student.entity";

@Resolver(of => StudentType)
export class StudentResolver {


    constructor(
        private studentService: StudentService
    ) {}


    @Query(returns => [StudentType])
    async getStudents(){
        return await this.studentService.getStudents();
    }

    @Query(returns => StudentType)
    async getStudentById(
        @Args('id') id: string,
    ){
        return await this.studentService.getStudentById(id);
    }

    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput
    )
    {
       return await this.studentService.createStudent(createStudentInput);
    }
}