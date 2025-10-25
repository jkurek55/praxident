import React from "react";
import cross from "../../images/cross.png"
import office from "../../images/5.jpg"

interface rowProps{
    children: React.ReactNode
    className?: string
}

const orange_dot = <div className={`flex-shrink-0 bg-orange-500 rounded-full
            2xl:w-12 2xl:h-12
            w-3 h-3
            `}/>

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className="flex items-center gap-4 ">
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
                sm:flex
                text-lg xs:text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                h-[500px] xs:h-[500px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[800px] 2xl:h-[1000px]
                `}>
                <div className={`
                    grid grid-rows-6
                    place-items-center text-center
                    sm:flex-auto
                    `}>
                    <img className="h-40 xs:h-40 sm:h-32 md:h-40 lg:h-72 xl:h-80 row-span-2 object-contain" src={cross} alt="orange cross" />
                    <Row>POGOTOWIE STOMATOLOGICZNE</Row>
                    <div className="font-sans font-light">Sobota 10:00 - 17:00 <br /> Niedziela 12:00 - 16:00</div>
                    <div className="font-sans text-orange-500">PROSIMY O KONTAKT TELEFONICZNY <br /> PRZED PRZYBYCIEM</div>
                    <div className="font-sans font-light">71 793 89 39</div>
                </div>
                <img src={office} alt="office_image" className={`
                    hidden sm:block
                    object-contain
                    sm:w-[350px] md:w-[450px] lg:w-[600px] xl:w-[700px] 2xl:w-[850px]
                    `} />
            </div>
        </section>
    )
}

export default OfficeSlide