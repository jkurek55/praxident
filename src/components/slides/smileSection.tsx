import React from "react";
//import smilingWoman from '../../images/smilingWoman.png';
import praxiLogo from '../../images/logo.png'

const SmileSection: React.FC = () => {
    return (
        <section 
        className={`bg-[url('images/smilingWoman.png')] bg-cover bg-top 
        relative w-screen 
        text-xs xs:text-lg 
        sm:text-xl 
        h-64 xs:h-72 sm:h-72 2xl:h-[1100px]
        `}>
            <div className={`
            flex flex-col justify-between absolute
            h-24 xs:h-36 sm:h-44 2xl:h-96
            w-32 xs:w-44 sm:w-56 2xl:w-[800px]
            left-4 2xl:left-16
            top-10 2xl:top-20
            2xl:gap-y-56
            `}>
                <div className={`
                    font-sans font-light 2xl:text-7xl
                    `}>
                    TWÓJ UŚMIECH <br /> ZMIENIA WSZYSTKO!</div>
                <img className={`
                2xl:w-2/3
                `}
                src={praxiLogo} alt="praxident logo" />
            </div>

        </section>
    )
}

export default SmileSection