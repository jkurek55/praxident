import React from "react";
import praxiLogo from "../../images/praxiLogo.png";
import pin from "../../images/mapPin.png"
import map from "../../images/map.png"

const MapSlide: React.FC = () => {
    return(
        <section>
            <div className="grid grid-cols-2 text-center items-center">
                <img src={praxiLogo} alt="praxident logo" />
                <div className="font-light font-sans text-xl">Wjazd od ul. Tadeusza Kościuszki</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-4 items-center">
                    <img className="h-14 object-contain" src={pin} alt="map pin" />
                    <div className="col-span-3 font-sans font-light">Wojska Polskiego 1e Strzelin</div>
                </div>
                <img src={map} alt="directions" />
            </div>

        </section>
    )
}

export default MapSlide