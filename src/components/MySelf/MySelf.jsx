/* eslint-disable react/prop-types */
import Special from "../Special/Special";

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>myself</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;