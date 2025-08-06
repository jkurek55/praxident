import React from "react";
import PraxiLogo from "../praxiLogo";
import smilingWoman from '../../images/smilingWoman.png';

const SmileSection: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url(${smilingWoman})` }} className={`h-[500px] w-[500px]`}>
            <div>Twój uśmiech zmienia wszystko</div>
            <PraxiLogo alt="praxident-logo"></PraxiLogo>
        </div>
    )
}

export default SmileSection