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
            w-3 2xl:w-12
            h-3 2xl:h-12
            `}/>
        <div className={`font-light ${className}`} > {children} </div>
    </div>
    )
}


const RentgenSection:React.FC = () => {
    return (
        <section className={`2xl:h-[1200px]`}>
            <div className="grid grid-cols-[8fr_5fr] overflow-clip">
                <div className="
                grid grid-rows-2 pl-3
                2xl:h-[1000px]
                ">
                    <Row className={`
                        text-base 2xl:text-7xl
                        `}>Pracownia rentgenowska</Row>
                    <div className={`
                        grid grid-rows-2 
                        text-xs 2xl:text-5xl
                        2xl:py-32
                        2xl:ml-12
                        `} >
                        <Row >Pantomogram OPG - cyfrowe zdjęcia panoramiczne</Row>
                        <Row >Radiowizjografja RVG - cyfrowe zdjęcia małoobrazkowe</Row>
                    </div>
                </div>
                <img className={`
                2xl:h-[1200px]
                2xl:w-[800px]
                2xl:object-cover
                    `} 
                    src={aparatus} alt="aparatus" />
            </div>

        </section>
    )
}

export default RentgenSection