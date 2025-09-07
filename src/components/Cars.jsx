import React from "react";
import "./../styles.scss";
import Car from "./Car";

const Cars = () => {

    const cars = [
        {
            id: "dream",
            model: { code: "dream", name: "Dream Car" },
            image: "https://i.ibb.co/v4TJT978/blue-car.png",
            engines: ["dizel", "benzin", "hibrid"],
            defaultEngine: "benzin",
            colorHex: "#4776ba",
            finish: "sjajna",
            price: { fromEUR: 7899, toEUR: 43799 }
        },
        {
            id: "nido",
            model: { code: "nido", name: "Nidorino" },
            image: "https://i.ibb.co/tPJPSQK6/renault1.png",
            engines: ["dizel", "benzin", "hibrid"],
            defaultEngine: "dizel",
            colorHex: "#9aa0a6",
            finish: "sjajna",
            price: { fromEUR: 40639, toEUR: 58927 }
        },
        {
            id: "bulba",
            model: { code: "bulba", name: "Bulbasaur" },
            image: "https://i.ibb.co/hFqJfRNr/renault2.png",
            engines: ["dizel", "benzin", "hibrid"],
            defaultEngine: "hibrid",
            colorHex: "#b3b3b3",
            finish: "mat",
            price: { fromEUR: 27629, toEUR: 40062 }
        },
        {
            id: "mar",
            model: { code: "mar", name: "Mareep" },
            image: "https://i.ibb.co/gLwnYZqs/renault3.png",
            engines: ["benzin", "hibrid"],
            defaultEngine: "benzin",
            colorHex: "#c0392b",
            finish: "sjajna",
            price: { fromEUR: 3679, toEUR: 5335 }
        },
        {
            id: "char",
            model: { code: "char", name: "Charizard" },
            image: "https://i.ibb.co/vvKK2s4K/renault4.png",
            engines: ["dizel", "benzin", "hibrid"],
            defaultEngine: "benzin",
            colorHex: "#2c3e50",
            finish: "mat",
            price: { fromEUR: 22199, toEUR: 32189 }
        }
    ];


    const formatPrice = (price) => {

        const thousands = Math.floor(price / 1000);
        const reminder = price % 1000;

        const result = `${thousands} ${reminder}`
        return result;
    };

    const carIndex = 0;


    return (

        <div className="car-section">
            <div className="car-img">
                <img id="bigCarPicture" src={cars[carIndex].image} alt="Car photo" />
            </div>

            <Car car={(cars[carIndex])} formatPrice = {formatPrice}/>
            
            <div className="cars-section">
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className={`car-card ${index === carIndex ? 'displayed' : ''}`}
                    >
                        <img src={car.image} alt="Car photo" />
                        <p>Već od </p>
                        <p>{formatPrice(car.price.fromEUR)}€</p>
                    </div>
                ))}

            </div>
        </div>
    )

};

export default Cars;