import React from "react";
import unit from '../../images/2.png';

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className={`flex items-center 
                    text-xs 2xl:text-7xl
                    gap-4`}>
        <div className={`flex-shrink-0 bg-orange-500 rounded-full
                        w-3 2xl:w-12
                        h-3 2xl:h-12
                        `}/>
        <div className="font-light "> {children} </div>
    </div>
    )
}

const FieldSection: React.FC = () => {
    return (
        
        <section className={"relative"}>
            <div className="static flex">
                <div className={`grid grid-rows-6 
                    py-12 2xl:py-72
                    pl-3 
                    2xl:ml-8
                    w-screen`}>
                    <Row> Stomatologia zachowawcza </Row>
                    <Row> Stomatologia dziecięca </Row>
                    <Row> Protetyka stomatologiczna </Row>
                    <Row> Endodoncja </Row>
                    <Row> Chirurgia stomatologiczna </Row>
                    <Row> Ortodoncja </Row>
                </div>
                <img className={"w-1/2 object-contain"} src={unit} alt="unit" />
            </div>
        </section>
    )
}

export default FieldSection