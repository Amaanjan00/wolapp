import affordable from "../assets/icons/affordable.png";
import bestservice from "../assets/icons/best-service.png";
import economical from "../assets/icons/economical.png";
import flexible from "../assets/icons/flexible.png";
import fuelefficient from "../assets/icons/fuel-efficient.png";
import reliable from "../assets/icons/reliable.png";
import dots from '../assets/icons/dots.png'

function Section2() {
  return (
    <>
      <div className="section2-container">

        <div className="section2-left">
            <img src={dots} alt="" />
        </div>

        <div className="elements">
          <div className="element-container">
            <img src={affordable} alt="" />
            <h3>Affordable Prices</h3>
            <p>Enjoy top-class luxury cars at prices that fit your budget.</p>
          </div>

          <div className="element-container">
            <img src={bestservice} alt="" />
            <h3>Outstanding Service</h3>
            <p>
              From booking to return, our team makes your experience smooth and
              hassle-free.
            </p>
          </div>

          <div className="element-container">
            <img src={flexible} alt="" />
            <h3>Flexible Rental Options</h3>
            <p>Choose a plan that works for you — daily, weekly or monthly.</p>
          </div>

          <div className="element-container">
            <img src={fuelefficient} alt="" />
            <h3>Economical and Fuel-efficient Cars</h3>
            <p>
              Drive fuel-efficient luxury cars that are easy on your wallet.
            </p>
          </div>

          <div className="element-container">
            <img src={economical} alt="" />
            <h3>Great Value for Money</h3>
            <p>Get premium cars and services without hidden costs.</p>
          </div>

          <div className="element-container">
            <img src={reliable} alt="" />
            <h3>Reliable and Convenient</h3>
            <p>
              Well-maintained cars and easy pick-up/drop-off options for a
              stress-free ride.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
