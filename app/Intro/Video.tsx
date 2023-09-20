
function Video() {
   return (
      <video className={`relative h-full w-full object-cover`} autoPlay muted loop>
         <source src='/videos/Intro.mp4' type='video/mp4' />
      </video>
   )
}
export default Video;