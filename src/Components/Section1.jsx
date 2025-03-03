import image from '../assets/section1-img.png'
import image2 from '../assets/section1-left-img.jpg'

function Section1(){
    return(
        <>
            <div className='section1-img-container'>
                <img className='left-image' src={image2} alt="" />
                <img className='section1-img' src={image} alt="" />
            </div>
        </>
    );
}

export default Section1