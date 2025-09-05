import React from "react";
import "./../styles.scss";

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

    const carCard = document.querySelector(".car-card")

    return (

        <div className="car-section">
            <div className="car-img">
                <img id="bigCarPicture" src={cars[carIndex].image} alt="Car photo" />
            </div>
            <div className="car-data">

                <div>
                    <p id="data-title">Izracunaj cenu svog auta iz snova</p>
                </div>

                <div>
                    <p>Pocevsi od {formatPrice(cars[carIndex].price.fromEUR)}€</p>
                </div>

                <div>
                    <p>model automobila:</p>
                    <p>{cars[carIndex].model.name}</p>
                </div>

                <div>
                    <p>Tip motora:</p>
                    <p>{cars[carIndex].defaultEngine}</p>
                </div>

                <div>
                    <p>boja automobila:</p>
                    <p>{cars[carIndex].colorHex}</p>
                </div>

                <div>
                    <p>Tip boje autmobila:</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: cars[carIndex].colorHex,
                                border: "1px solid #ccc",
                            }}
                        ></div>
                        <p>{cars[carIndex].colorHex}</p>
                    </div>
                    <p>{cars[carIndex].finish} boja</p>
                </div>

                <div>
                    <p>opseg cene</p>
                    <p>{formatPrice(cars[carIndex].price.fromEUR)}€ - {formatPrice(cars[carIndex].price.toEUR)}€</p>
                </div>

                <div>
                    <p>Kontakt mail:</p>
                    <p>primer@email.com</p>
                </div>

            </div>

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