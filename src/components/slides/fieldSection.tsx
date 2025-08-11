import React from "react";
import unit from '../../images/2.jpg';

const fieldSection: React.FC = () => {
    return (
        <div className={"relative w-screen"}>
            <img className={"absolute left-0 top-0 w-screen"}
            src={unit} alt="unit" />
        </div>
    )
}

export default fieldSection