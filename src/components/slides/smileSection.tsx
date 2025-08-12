import React from "react";
import smilingWoman from '../../images/smilingWoman.png';
import praxiLogo from '../../images/logo.png'

const SmileSection: React.FC = () => {
    return (
        <section className={"relative w-screen"}>
            <img className={"static w-screen object-contain"}
            src={smilingWoman} alt="smiling-woman" />
            <div className="flex flex-col justify-between h-28 w-32 absolute left-4 top-10 ">
                <div className={"font-sans text-xs font-light"}>
                    TWÓJ UŚMIECH <br /> ZMIENIA WSZYSTKO!</div>
                <img className={"w-[90px]"}
                src={praxiLogo} alt="praxident logo" />
            </div>

        </section>
    )
}

export default SmileSection