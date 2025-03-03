import { useState } from 'react';
import styles from './Product.module.css'
import sunny from '../assets/car/nissansunny.jpg'
import sunny2020 from '../assets/car/sunny2020.jpg'
import attraige2020 from '../assets/car/attraige2020.jpg'
import attraige2022 from '../assets/car/attraige2022.jpg'
import micra from '../assets/car/micra.webp'

function Product(){

    const cars = [
        {
            carname: "Sunny 2020",
            carprice: "AED 1550/month",
            carinfo: "dasdas",
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
            img: sunny2020
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
        <>

            <div className={styles.asidecontainer}>

                <div className={styles.asidecarscontainer}>

                    {cars.map((car, index) => (
                        <div className={styles.carcontainer} key={index}>
                            <img src={car.img} alt="car" />
                            <div className={styles.cardetails}>
                                <h2>{car.carname}</h2>
                                <ul>
                                    <li>💺 4 seater</li>
                                    <li>⛽ fuel efficient</li>
                                </ul>
                                <h4>AED 1000</h4>
                            </div>
                        </div>

                    ))}

                </div>


            </div>
        </>
    );
}

export default Product