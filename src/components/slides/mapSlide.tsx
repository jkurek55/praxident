import React from "react";
//import praxiLogo from "../../images/praxiLogo.png";
import pin from "../../images/mapPin.png"
import map from "../../images/map.png"

const MapSlide: React.FC = () => {
    return(
        <section>
            <div className="grid grid-rows-3">
                <div className="grid grid-cols-4 items-center ml-14 mr-14 pb-4">
                    <img className="h-14 object-contain" src={pin} alt="map pin" />
                    <div className=" font-sans font-light col-span-3">Wojska Polskiego 1e Strzelin</div>
                    <div className="pl-10 font-sans font-light col-span-4">Wjazd od ul. Tadeusza Kościuszki</div>
                
                </div>
                <img className="row-span-2" src={map} alt="directions" />
            </div>

        </section>
    )
}

export default MapSlide