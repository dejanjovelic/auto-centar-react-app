import React from "react";
import "./../styles.scss";

const Locations = () => {
    const locations = [
        { name: "Auto centar Gavrić", city: "Novi Sad", address: "Gaudijeva 13" },
        { name: "Auto centar Ivković", city: "Novi Sad", address: "Mihaila Pupina 2" },
        { name: "Auto centar Klisa", city: "Novi Sad", address: "Ilije Birčanina 23" },
        { name: "Auto Centar Liman", city: "Novi Sad", address: "Pabla Pikasa 3" }
    ];

    return (
        <div className="locations-container">
            <h3>Prodajne lokacije</h3>
            <div className="location-section">
                {locations.map((location) => (
                <div className="location-container">
                    <h2>{location.name}</h2>
                    <p>Adresa: <span>{location.address}, {location.city}</span></p>
                </div>
            ))}
            </div>
            

        </div>
    )

}

export default Locations;