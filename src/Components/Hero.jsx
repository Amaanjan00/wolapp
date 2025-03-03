import video from '../assets/hero.mp4'

function Hero(){
    return(
        <>
            <div className='hero-container'>
                <video className='hero-video' src={video} typeof='video/mp4' autoPlay loop muted/>

                <div className="hero-text-container">
                    <h1>Choose the car that fits best with you</h1>
                </div>
            </div>
        </>
    );

}

export default Hero