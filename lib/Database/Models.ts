import mongoose, { model, models } from "mongoose";
import { InstructoScema } from "./instructorSchema/InstructorSchema";
import { courseSechema } from "./CourseSchema/CourseSchme";
import { StudentSchema } from "./StudentSchema/StudentSchema";


export const InstructorModel =models?.instructor || model('instructor',InstructoScema)

export const CourseModel = models?.course || model("course",courseSechema) 
export const StudentModel = models?.student || model("student",StudentSchema) 

