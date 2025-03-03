import HeaderM from '../Components/HeaderM.jsx'
import Footer from '../Components/Footer.jsx'

function Contact(){
    return(
        <>
            <HeaderM/>

            <div className="contact">
                <h1>Contact</h1>

                <h2>Experience the Luxury Today!</h2>
                <p>Discover the elegance of driving a top-tier vehicle with Wheels on Luxury Car Rental LLC. Contact us today to book your dream ride and experience Dubai like never before!</p>
                <p>
                    📞 Contact: <br /> <br /> <a href="+971-564698126">+971-564698126</a> <br /> (Anchal Singh) <br /><br /> <a href="+971-524322330">+971-524322330</a> <br /> (Fardeen Jan) <br /><br />
                    📧 Email: <br /> <a href="info@wheelsonluxury.com">info@wheelsonluxury.com</a> <br /><br />
                    📍 Location: <br /><br /> Schon Business Park, Plot No. 29, Dubai Investment Park, Dubai <br /><br />
                </p>

                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8825225108053!2d55.4021116754766!3d25.17344427772627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f539a6bc50d672d%3A0xa03e372c9a132d19!2sWheels%20on%20Luxury%20Car%20Rental%20LLC!5e0!3m2!1sen!2sin!4v1738439381515!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Contact