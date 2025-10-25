import React from "react";
import registrationDesk from "../../images/4.jpg"

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className={`flex items-center  gap-4 2xl:gap-0 pl-2 row-span-3 ${className}`}>
        <div className={`flex-shrink-0 bg-orange-500 rounded-full
            w-3 2xl:w-12
            h-3 2xl:h-12
            `}/>
        <div className={` ${className}`} > {children} </div>
    </div>
    )
}

const RegistrationSlide: React.FC = () => {
    return (
        <section>
            <div className={`
            grid grid-cols-1 2xl:grid-cols-2 
            font-light
            2xl:h-[1200px] 
            text-sm 2xl:text-5xl
            `}>
                <div className="grid grid-rows-8 text-center ">
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
                hidden 2xl:block 2xl:h-[1200px]
                `} src={registrationDesk} alt="registration desk" />
            </div>

        </section>
    )
}

export default RegistrationSlide