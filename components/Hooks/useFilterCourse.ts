import { searchObject } from "@/app/(pages)/courses/page";
import { CourseType } from "../Courses/CourseCard/CourseCard";

export default function useFilterCourse(searchData:searchObject,courses:CourseType[]) {
    let filterData:CourseType[] = []
    if (
        searchData.catagories.length ||
        searchData.instructors.length ||
        searchData.level.length ||
        searchData.price
      ) 
      {
    if (
        searchData.catagories.length ||
        searchData.instructors.length ||
        searchData.level.length 
      ) {
        filterData = courses.filter((course) => {
          const isInCatagorys = searchData.catagories.some(
            (item) => item == course.type.split(" ").join("_").toLowerCase()
          );
          const isInstructors = searchData.instructors.some(
            (item) => item == course.instructor?.split(" ").join("_").toLowerCase()
          );
          const isInlevel = searchData.level.some(
            (item) => item == course.level.split(" ").join("_").toLowerCase()
          );
          if (
            searchData.catagories.length &&
            !searchData.instructors.length &&
            !searchData.level.length
          ) {
            if (isInCatagorys) {
              if (parseInt(searchData.price) > 0 && searchData.price !== "free") {
                if (parseInt(course?.price) <= parseInt(searchData.price)) {
                  return course;
                } else {
                  return;
                }
              } else if (searchData.price == "free") {
                return course;
              }
    
              return course;
            }
          } else if (
            !searchData.catagories.length &&
            searchData.instructors.length &&
            !searchData.level.length
          ) {
            if (isInstructors) {
              if (parseInt(searchData.price) > 0 && searchData.price !== "free") {
                if (parseInt(course?.price) <= parseInt(searchData.price)) {
                  return course;
                } else {
                  return;
                }
              } else if (searchData.price == "free") {
                return course;
              }
    
              return course;
            }
          } else if (
            !searchData.catagories.length &&
            !searchData.instructors.length &&
            searchData.level.length
          ) {
            if (isInlevel) {
              if (parseInt(searchData.price) > 0 && searchData.price !== "free") {
                if (parseInt(course?.price) <= parseInt(searchData.price)) {
                  return course;
                } else {
                  return;
                }
              } else if (searchData.price == "free") {
                return course;
              }
    
              return course;
            }
          } else if (
            searchData.catagories.length &&
            searchData.instructors.length &&
            !searchData.level.length
          ) {
            if (isInCatagorys && isInstructors) {
              if (parseInt(searchData.price) > 0 && searchData.price !== "free") {
                if (parseInt(course?.price) <= parseInt(searchData.price)) {
                  return course;
                } else {
                  return;
                }
              } else if (searchData.price == "free") {
                return course;
              }
    
              return course;
            }
          } else if (
            searchData.catagories.length &&
            !searchData.instructors.length &&
            searchData.level.length
          ) {
            if (isInCatagorys && isInlevel) {
              if (parseInt(searchData.price) > 0 && searchData.price !== "free") {
                if (parseInt(course?.price) <= parseInt(searchData.price)) {
                  return course;
                } else {
                  return;
                }
              } else if (searchData.price == "free") {
                return course;
              }
    
              return course;
            }
          } else if (
            !searchData.catagories.length &&
            searchData.instructors.length &&
            searchData.level.length
          ) {
            if (isInstructors && isInlevel) {
              if (parseInt(searchData.price) > 0 && searchData.price !== "free") {
                if (parseInt(course?.price) <= parseInt(searchData.price)) {
                  return course;
                } else {
                  return;
                }
              } else if (searchData.price == "free") {
                return course;
              }
    
              return course;
            }
          } else if (
            searchData.catagories.length &&
            searchData.instructors.length &&
            searchData.level.length
          ) {
            if (isInCatagorys && isInstructors && isInlevel) {
              if (parseInt(searchData.price) > 0 && searchData.price !== "free") {
                if (parseInt(course?.price) <= parseInt(searchData.price)) {
                  return course;
                } else {
                  return;
                }
              } else if (searchData.price == "free") {
                return course;
              }
    
              return course;
            }
          }
        });
      }else {
        if((parseInt(searchData.price) > 0 && searchData.price !== "free")&&
      !searchData.catagories.length &&
      !searchData.instructors.length &&
      !searchData.level.length 
    
    ){
    
      
        filterData= courses.filter(item=>parseInt(item.price)<=parseInt(searchData.price) )
      }
      else if(searchData.price=='free'){
        filterData= courses.filter(item=>item.price == 'free' )
      }
      }
    }else{
        return courses
    }
      return filterData
}
