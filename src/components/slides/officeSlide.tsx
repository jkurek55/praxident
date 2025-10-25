import React from "react";
import cross from "../../images/cross.png"
import office from "../../images/5.jpg"

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className="flex items-center gap-4 ">
        <div className={`flex-shrink-0 bg-orange-500 rounded-full
            2xl:w-12 2xl:h-12
            w-3 h-3
            `}/>
        <div className={`font-light ${className}`} > {children} </div>
    </div>
    )
}

interface offiseSlideProps{
    ref: React.Ref<HTMLElement>
}

const OfficeSlide: React.FC<offiseSlideProps> = ({ref}) => {
    return (
        <section ref={ref}>
            <div className={`
                2xl:flex
                text-sm 2xl:text-5xl
                2xl:h-[1000px]
                `}>
                <div className={`
                    grid grid-rows-6
                    place-items-center text-center
                    2xl:flex-auto
                    `}>
                    <img className="h-24 xl:h-80 row-span-2 object-contain" src={cross} alt="orange cross" />
                    <Row>POGOTOWIE STOMATOLOGICZNE</Row>
                    <div className="font-sans font-light">Sobota 10:00 - 17:00 <br /> Niedziela 12:00 - 16:00</div>
                    <div className="font-sans text-orange-500">PROSIMY O KONTAKT TELEFONICZNY <br /> PRZED PRZYBYCIEM</div>
                    <div className="font-sans font-light">71 793 89 39</div>
                </div>
                <img src={office} alt="office_image" className={`
                    hidden 2xl:block
                    2xl:w-[850px]
                    `} />
            </div>
        </section>
    )
}

export default OfficeSlide