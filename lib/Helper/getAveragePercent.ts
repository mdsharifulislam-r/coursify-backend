import { review } from "../Types/Types";

export function getAverageRatingPercent(ratings:review[],star:number){
    const average = 100/ratings?.length
    const amount = ratings?.filter(item=>parseInt(item.star||"")==star)
    const percent = average*amount.length
    return percent
}