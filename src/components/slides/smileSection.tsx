import React from "react";
import smilingWoman from '../../images/smilingWoman.png';
import praxiLogo from '../../images/logo.png'

const SmileSection: React.FC = () => {
    return (
        <div className={"relative w-screen"}>
            <img className={"absolute left-0 top-0 w-screen"}
            src={smilingWoman} alt="smiling-woman" />

            <div className={"absolute left-[100px] top-[300px] font-sans text-8xl font-light"}>
                TWÓJ UŚMIECH <br /> ZMIENIA WSZYSTKO!</div>
            <img className={"absolute w-[700px] left-[100px] top-[700px]"}
            src={praxiLogo} alt="praxident logo" />
        </div>
    )
}

export default SmileSection