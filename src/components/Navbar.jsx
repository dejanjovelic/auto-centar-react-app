import React from "react";
import "./../styles.scss";

const Navbar = () => {
return(
<nav className="navbar-container">
    <ul>
        <li><a href="">Akcija</a></li>
        <li><a href="">Naša priča</a></li>
        <li><a href=""><img src="https://i.ibb.co/cXh6GXGK/car-logo.png" alt="Slika auta" /></a></li>
        <li><a href="">Informacije</a></li>
        <li><a href="">Ponuda</a></li>
    </ul>

</nav>
);
};

export default Navbar;