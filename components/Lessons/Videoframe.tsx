import { YouTubeEmbed } from '@next/third-parties/google'
interface props{
  videoLinks:string | undefined
}

export default function Videoframe({videoLinks}:props) {
  const splitNames = youtubeParser(videoLinks || "");

  
  return (
    <div className=" w-full py-3">
    {/* <iframe
      className="h-full w-full rounded-lg"
      src={`https://www.youtube.com/embed/${splitNames && splitNames[1]}`}
      allowFullScreen
      title="YouTube Video"
    ></iframe> */}
    <YouTubeEmbed  videoid={splitNames ?splitNames :""}  params="controls=1" />
  </div>
  
  )
}


export function youtubeParser(url:string){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}