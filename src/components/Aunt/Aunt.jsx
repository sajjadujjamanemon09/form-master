import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunt = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin name={'Momshad'}></Cousin>
                <Cousin name={'Rskib'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 TK</button>
        </div>
    );
};

export default Aunt;