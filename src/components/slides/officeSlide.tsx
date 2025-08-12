import React from "react";
import cross from "../../images/cross.png"
import office from "../../images/5.jpg"

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className="flex items-center text-sm gap-4 ">
        <div className={"w-3 h-3 flex-shrink-0 bg-orange-500 rounded-full"}/>
        <div className={`font-light ${className}`} > {children} </div>
    </div>
    )
}



const OfficeSlide: React.FC = () => {
    return (
        <section>
            <div className="grid grid-cols-2">
                <div className="grid grid-rows-6 col-span-2 place-items-center text-center">
                    <img className="h-24 row-span-2 object-contain" src={cross} alt="orange cross" />
                    <Row>POGOTOWIE STOMATOLOGICZNE</Row>
                    <div className="font-sans font-light">Sobota 10:00 - 17:00 <br /> Niedziela 12:00 - 16:00</div>
                    <div className="font-sans text-orange-500">PROSIMY O KONTAKT TELEFONICZNY <br /> PRZED PRZYBYCIEM</div>
                    <div className="font-sans font-light">71 793 89 39</div>
                </div>
            </div>
        </section>
    )
}

export default OfficeSlide