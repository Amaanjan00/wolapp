import number1 from '../assets/icons/number1.png'
import number2 from '../assets/icons/number2.png'
import number3 from '../assets/icons/number3.png'
import number4 from '../assets/icons/number4.png'

function Section3(){
    return(
        <>
        <div className="section3">
           <div className="section3-element-left">

            </div>

            <div className="section3-element-right">
                <div className="howto">

                    <div className='howto-header'>
                        <h1>How to book your ride?</h1>
                        <p>Book your ride in 4 easy steps.</p>
                    </div>

                    <div className="step">
                        <img src={number1} alt="" />
                        <div className='step-text'>
                            <h2>Choose Your Car</h2>
                            <p>Browse our website and pick the car you like. Send us an inquiry to get started.</p>
                        </div>
                    </div>

                    <div className="step">
                        <img src={number2} alt="" />
                        <div className='step-text'>
                            <h2>Fill Out the Form</h2>
                            <p>Submit the booking form with your details: name, gender, age, Emirates ID, license number, and phone number.</p>
                        </div>
                    </div>

                    <div className="step">
                        <img src={number3} alt="" />
                        <div className='step-text'>
                            <h2>Finalzing the deal</h2>
                            <p>Our team will call you to confirm your booking and finalize the details.</p>
                        </div>
                    </div>

                    <div className="step">
                        <img src={number4} alt="" />
                        <div className='step-text'>
                            <h2>Receive Your Car</h2>
                            <p>Once confirmed, your car will be ready for pick-up or delivery—hassle-free!</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    );
}

export default Section3