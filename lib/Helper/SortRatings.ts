
import { review } from '../Types/Types';

export default function SortRatings(ratingns:review[],sort:string) {
    console.log('call');
    
  if(sort=="" || sort==undefined){
    return ratingns.reverse()
  }
  if(sort=="lowtohigh"){
    const data = ratingns?.sort((a,b)=>parseInt(a.star||"")-parseInt(b.star||""))
    return data
    
    
  }
  else if(sort=="hightolow"){
    const data = ratingns?.sort((a,b)=>parseInt(b.star||"")-parseInt(a.star||""))
    return data
  }
  else{
    return ratingns
  }
}
