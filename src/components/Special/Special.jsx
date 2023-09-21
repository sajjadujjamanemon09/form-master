import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

/* eslint-disable react/prop-types */
const Special = ({asset}) => {

    const gift = useContext(AssetContext)
    return (
        <div>
            <h4>Special</h4>
            <p>Has: {asset}</p>
            <p>Also Has: {gift}</p>
        </div>
    );
};

export default Special;