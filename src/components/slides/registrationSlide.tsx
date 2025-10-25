import React from "react";
import registrationDesk from "../../images/4.jpg"

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className={`flex items-center pl-2 row-span-3 ${className}`}>
        <div className={`flex-shrink-0 bg-orange-500 rounded-full
            w-5 xs:w-8 sm:w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-12
            h-5 xs:h-8 sm:h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-12
            `}/>
        <div className={` ${className}`} > {children} </div>
    </div>
    )
}

const RegistrationSlide: React.FC = () => {
    return (
        <section >
            <div className={`
            grid grid-cols-1 sm:grid-cols-2
            font-light
            xl:h-[1000px] 2xl:h-[1200px] 
            text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl
            `}>
                <div className="grid grid-rows-8 text-center
                sm:pt-24">
                    <Row className={`pl-8`}>Rejestracja czynna od poniedziałku do piątku w godzinach:</Row>
                    <div className="row-span-5">
                        Poniedziałek: 11:30 - 19:00 <br />
                        Wtorek: 8:30 - 16:00 <br />
                        Środa: 11:30 - 19:00 <br />
                        Czwartek: 8:30 - 16:00 <br />
                        Piątek: 8:30 - 16:00 <br />
                    </div>
                </div>
                <img  className={`
                hidden sm:block
                xl:h-[1000px]  2xl:h-[1200px] 
                object-contain
                `} src={registrationDesk} alt="registration desk" />
            </div>

        </section>
    )
}

export default RegistrationSlide