import React from "react";
import "./../styles.scss";

export default (props) => {

    return (
        <div className="car-data">

            <div>
                <p id="data-title">Izračunaj cenu svog auta iz snova</p>
            </div>

            <div>
                <p>Počevši od {props.formatPrice(props.car.price.fromEUR)}€</p>
            </div>

            <div>
                <p>Model automobila:</p>
                <p>{props.car.model.name}</p>
            </div>

            <div>
                <p>Tip motora:</p>
                <p>{props.car.defaultEngine}</p>
            </div>

            <div>
                <p>Boja automobila:</p>
                <div  className="color-container">
                    <div className="color-square" style={{ backgroundColor: props.car.colorHex}}></div>
                    <p>{props.car.colorHex}</p>
                </div>
            </div>

            <div>
                <p>Tip boje autmobila:</p>

                <p>{props.car.finish} boja</p>
            </div>

            <div>
                <p>Opseg cene</p>
                <p>{props.formatPrice(props.car.price.fromEUR)}€ - {props.formatPrice(props.car.price.toEUR)}€</p>
            </div>

            <div>
                <p>Kontakt mail:</p>
                <p>primer@email.com</p>
            </div>

        </div>
    );
};