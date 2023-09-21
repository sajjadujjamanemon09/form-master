import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000)

const GrandPa = () => {
  const [money, setMoney] = useState(1000)
    const asset = 'Diamond Ring'
    return (
        <div className="grandpa ">
            <h2>GrandPa</h2>
            <p>Net Money: {money}</p>
         <MoneyContext.Provider value={[money, setMoney]}>
         <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>
          </section>
          </AssetContext.Provider>
         </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;


/*
1. create a context and export it
2. add provider for the context with a value.value could be anything
3. useContext to access value in the context API
*/ 