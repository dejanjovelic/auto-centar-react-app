import React from "react";
import "./../styles.scss";
import Locations from "./Locations";
import Cars from "./Cars";

const Content = () => {
return(
<div className="content-container">
    <Locations/>
    <Cars/>
</div>
);
};

export default Content;