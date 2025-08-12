import React from "react";
import aparatus from "../../images/3.png"

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className="flex items-center text-xs gap-4 ">
        <div className={"w-3 h-3 flex-shrink-0 bg-orange-500 rounded-full"}/>
        <div className={`font-light ${className}`} > {children} </div>
    </div>
    )
}


const RentgenSection:React.FC = () => {
    return (
        <section>
            <div className="grid grid-cols-3">
                <div className="grid grid-rows-2 col-span-2 pl-3">
                    <Row className="text-base">Pracownia rentgenowska</Row>
                    <div className="grid grid-rows-2">
                        <Row className="text-xs">Pantomogram OPG - cyfrowe zdjęcia panoramiczne</Row>
                        <Row className="text-xs">Radiowizjografja RVG - cyfrowe zdjęcia małoobrazkowe</Row>
                    </div>
                </div>
                <img className='object-contain' src={aparatus} alt="aparatus" />
            </div>

        </section>
    )
}

export default RentgenSection