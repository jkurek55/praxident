import React from "react";
//import smilingWoman from '../../images/smilingWoman.png';
import praxiLogo from '../../images/logo.png'

const SmileSection: React.FC = () => {
    return (
        <section 
        className={"bg-[url('images/smilingWoman.png')] bg-cover bg-top \
        relative w-screen \
        text-xs xs:text-lg \
        sm:text-xl \
        h-64 xs:h-72 \
        sm:h-72 \
        "}>

            <div className="
            flex flex-col justify-between absolute
            h-24 w-32
            xs:h-36 xs:w-44
            sm:h-44 sm:w-56
            left-4 top-10 
            ">
                <div className={"font-sans  font-light"}>
                    TWÓJ UŚMIECH <br /> ZMIENIA WSZYSTKO!</div>
                <img className={""}
                src={praxiLogo} alt="praxident logo" />
            </div>

        </section>
    )
}

export default SmileSection