import React from "react";
//import praxiLogo from "../../images/praxiLogo.png";
import pin from "../../images/mapPin.png"
import map from "../../images/map.png"
import praxiLogo from "../../images/praxiLogo.png";

const MapSlide: React.FC = () => {
    return(
        <section className="grid grid-cols-2 grid-rows-2 h-[1200px] 2xl:text-6xl">
            <div className="flex">
                <img
                src={praxiLogo}
                alt=""
                className="object-contain h-[600px]"
                />
            </div>
            <div className="flex items-center justify-center">
                <span className=" font-light">Wjazd od ul. Tadeusza Kościuszki</span>
            </div>

            <div className="flex items-center justify-center">
                <img src={pin} alt="" />
                <span className="font-light">Wojska Polskiego 1e Strzelin</span>
            </div>
            <div className="flex items-center justify-center">
                <img
                src={map}
                alt=""
                className="object-contain h-[600px]"
                />
            </div>
        </section>
    )
}

export default MapSlide