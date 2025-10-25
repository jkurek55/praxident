import React from "react";
import aparatus from "../../images/3.png"

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className={`flex items-center gap-4`}>
        <div className={`
            flex-shrink-0 bg-orange-500 rounded-full
            w-3 xs:w-4 sm:w-5 md:w-7 lg:w-8 xl:w-10 2xl:w-12
            h-3 xs:h-4 sm:h-5 md:h-7 lg:h-8 xl:h-10 2xl:h-12
            `}/>
        <div className={`font-light ${className}`} > {children} </div>
    </div>
    )
}


const RentgenSection:React.FC = () => {
    return (
        <section className={`xs:h-[500px] md:h-[550px] lg:h-[750px] xl:h-[900px] 2xl:h-[1000px]`}>
            <div className="grid grid-cols-[8fr_7fr] sm:grid-cols-[8fr_8fr] md:grid-cols-[8fr_7fr] lg:grid-cols-[8fr_6fr] 2xl:grid-cols-[8fr_5fr]">
                <div className="
                grid grid-rows-2 pl-3
                h-[250px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[750px] xl:h-[800px] 2xl:h-[1000px]
                ">
                    <Row className={`
                        text-base xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                        `}>Pracownia rentgenowska</Row>
                    <div className={`
                        grid grid-rows-2 
                        text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                        py-8 xs:py-12 sm:py-16 lg:py-18 xl:py-24 2xl:py-32
                        ml-4 xs:ml-6  lg:ml-8 xl:ml-12 2xl:ml-12
                        `} >
                        <Row >Pantomogram OPG - cyfrowe zdjęcia panoramiczne</Row>
                        <Row >Radiowizjografja RVG - cyfrowe zdjęcia małoobrazkowe</Row>
                    </div>
                </div>
                <img className={`
                xs:h-[400px] sm:h-[500px] md:h-[550px] lg:h-[750px] xl:h-[900px] 2xl:h-[1000px]
                object-cover
                    `} 
                    src={aparatus} alt="aparatus" />
            </div>

        </section>
    )
}

export default RentgenSection