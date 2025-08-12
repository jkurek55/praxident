import React from "react";
import registrationDesk from "../../images/4.jpg"

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className="flex items-center  gap-4 pl-2">
        <div className={"w-3 h-3 flex-shrink-0 bg-orange-500 rounded-full"}/>
        <div className={`font-light ${className}`} > {children} </div>
    </div>
    )
}

const RegistrationSlide: React.FC = () => {
    return (
        <section>
            <div className="grid grid-cols-2">
                <div className="grid grid-rows-3 place-items-center content-center py-8">
                    <Row>Rejestracja czynna od poniedziałku do piątku <br /> w godzinach:</Row>
                    <div className="row-span-2 font-sans font-light text-sm pl-2">
                        Poniedziałek: 11:30 - 19:00 <br />
                        Wtorek: 8:30 - 16:00 <br />
                        Środa: 11:30 - 19:00 <br />
                        Czwartek: 8:30 - 16:00 <br />
                        Piątek: 8:30 - 16:00 <br />
                    </div>
                </div>
                <img className="object-contain" src={registrationDesk} alt="registration desk" />
            </div>

        </section>
    )
}

export default RegistrationSlide