import { revalidateTag } from "next/cache";

export async function getCourse() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/course`, {
      next : {
        tags : ["allCourseTag"]
      }
     
    });

 
    const data = await response.json();
    return data?.isOk ? data.data : [];
  } catch (err) {
    return [];
  }
}
