interface props{
  videoLinks:string | undefined
}
export default function Videoframe({videoLinks}:props) {
  
  
  return (
    <div className="aspect-video">
    <iframe
      className="h-full w-full rounded-lg"
      src={videoLinks}
      allowFullScreen
      title="YouTube Video"
    ></iframe>
  </div>
  
  )
}
