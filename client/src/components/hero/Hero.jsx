import './Hero.css'
import VideoSrc from "../../assets/burger.mp4"

const Hero = () => {

  return (
    <div className='hero'>
        <video className="video" src={VideoSrc} autoPlay loop muted />
    </div>
  )
}

export default Hero
