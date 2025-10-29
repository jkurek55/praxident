import React from "react";
import pin from "../../images/mapPin.webp"
import map from "../../images/map.webp"
import praxiLogo from "../../images/praxiLogo.webp";

const MapSlide: React.FC = () => {
    return(
        <section className="grid grid-rows-[fr1_fr_3] lg:grid-cols-2 lg:grid-rows-2
        h-[420px] xs:h-[500px] sm:h-[600px] md:h-[700px] xl:h-[1000px]  2xl:h-[1200px]
        text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
        text-center">
            <div className="hidden lg:flex">
                <img
                src={praxiLogo}
                alt=""
                className="object-contain lg:h-[400px]"
                />
            </div>
            <div className="hidden lg:flex items-center justify-center">
                <span className=" font-light ">Wjazd od ul. Tadeusza Kościuszki</span>
            </div>

            <div className="flex items-center justify-center">
                <img src={pin} alt="" className="h-6 xs:h-8 sm:h-12 md:h-14 lg:h-12 object-contain"/>
                <span className="font-light">Wojska Polskiego 1e Strzelin</span>
            </div>
            <div className="flex items-center justify-center">
                <img
                src={map}
                alt=""
                className="object-contain h-[300px] xs:h-[350px] md:h-[500px] lg:h-[800px]"
                />
            </div>
        </section>
    )
}

export default MapSlide