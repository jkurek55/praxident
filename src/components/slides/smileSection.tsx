import React from "react";
import smilingWoman from '../../images/smilingWoman.png';
import praxiLogo from '../../images/logo.png'

const SmileSection: React.FC = () => {
    return (
        <section className={"relative w-screen h-[1500px]"}>
            <img className={"absolute w-screen h-[1500px] "}
            src={smilingWoman} alt="smiling-woman" />
            <div className={"absolute left-[100px] top-[300px] font-sans text-8xl font-light"}>
                TWÓJ UŚMIECH <br /> ZMIENIA WSZYSTKO!</div>
            <img className={"absolute w-[700px] left-[100px] top-[700px] "}
            src={praxiLogo} alt="praxident logo" />
        </section>
    )
}

export default SmileSection