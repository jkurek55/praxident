import React from "react";
//import smilingWoman from '../../images/smilingWoman.png';
import praxiLogo from '../../images/logo.png'

const SmileSection: React.FC = () => {
    return (
        <section 
        className={`bg-[url('images/smilingWoman2.jpg')] bg-cover bg-top 
        relative w-screen 
        text-xs xs:text-lg 
        sm:text-xl 
        h-64 xs:h-72 sm:h-80 md:h-[600px] lg:h-[900px] xl:h-[900px] 2xl:h-[1100px]
        `}>
            <div className={`
            flex flex-col justify-between absolute
            h-24 xs:h-36 sm:h-44 md:h-52 lg:h-64 xl:h-72 2xl:h-96
            w-32 xs:w-44 sm:w-56 md:w-[400px] lg:w-[550px] xl:w-[650px] 2xl:w-[800px]
            left-4 md:left-8 lg:left-16 xl:left-16 2xl:left-16
            top-10 md:top-12 lg:top-20 xl:top-20 2xl:top-20
            md:gap-y-24 lg:gap-y-56 xl:gap-y-56 2xl:gap-y-56
            `}>
                <div className={`
                    font-sans font-light md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl
                    `}>
                    TWÓJ UŚMIECH <br /> ZMIENIA WSZYSTKO!</div>
                <img className={`
                md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3
                `}
                src={praxiLogo} alt="praxident logo" />
            </div>

        </section>
    )
}

export default SmileSection