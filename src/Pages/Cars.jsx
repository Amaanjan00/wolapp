import HeaderM from "../Components/HeaderM.jsx";
import Product from "../Components/Product.jsx"
import CarsHead from '../Components/CarsHead/CarsHead.jsx'
import Footer from '../Components/Footer.jsx'
import Inquiry from "../Components/Inquiry/Inquiry.jsx";

function Cars(){
    return(
        <>
            <div className="header-cars">
                <HeaderM/>
            </div>
            <div className="asidefilter">
                <CarsHead/>
            </div>
            <div className="cars-page-main">
                <div className="carlistaside">
                    <Product/>
                </div>
                <Inquiry/>
                
            </div>
            <Footer/>
        </>
    );
}

export default Cars