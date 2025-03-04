import sunny from '../assets/car/nissansunny.jpg'
import sunny2020 from '../assets/car/sunny2020.jpg'
import attraige2020 from '../assets/car/attraige2020.jpg'
import attraige2022 from '../assets/car/attraige2022.jpg'
import micra from '../assets/car/micra.webp'


function Section5(){

    const cars = [
        {
            carname: "Sunny 2020",
            carprice: "AED 1550/month",
            carinfo: "Fuel Efficient",
            img: sunny2020
        },
        {
            carname: "Attraige 2020",
            carprice: "AED 1550/month",
            carinfo: "dasdas",
            img: attraige2020
        },
        {
            carname: "Attraige 2022",
            carprice: "AED 1550/month",
            carinfo: "dasdas",
            img: attraige2022
        },
        {
            carname: "Sunny 2021",
            carprice: "AED 1550/month",
            carinfo: "dasdas",
            img: sunny
        },
        {
            carname: "Sunny 2024",
            carprice: "AED 1550/month",
            carinfo: "dasdas",
            img: sunny
        },
        {
            carname: "Micra 2024",
            carprice: "AED 1550/month",
            carinfo: "dasdas",
            img: micra
        }
    ]
    
    return(
        <div className="section5">
            <div className="section5-left"></div>

            <div className="section5-right">

                <h1>Best Sellers</h1>

                <div className="section5-element-container">

                    {cars.map((car, index) =>(

                        <div className="section5-element">

                            <img src={car.img} alt="img" />

                            <div className='element-text' key={index}>
                                <h2>{car.carname}</h2>
                                <p>{car.carinfo}</p>
                                <h3>{car.carprice}</h3>
                            </div>

                            <div className='element-buttons'>
                                <button>Book Now</button>
                                <button>Learn More</button>
                            </div>

                        </div>

                    ))}

                </div>
            </div>
        </div>
    );
}

export default Section5