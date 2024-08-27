import { review } from "../Types/Types";

export async function GetAvarageRating(ratings:review[]) {
    let sum = 0
    ratings.length && ratings.forEach(item=>sum+=parseInt(item.star||"0"))
    return sum/ratings.length 
}