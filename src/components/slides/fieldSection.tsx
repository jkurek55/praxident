import React from "react";
import unit from '../../images/2.png';

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className="flex items-center text-xs gap-4 ">
        <div className={"w-3 h-3  flex-shrink-0 bg-orange-500 rounded-full"}/>
        <div className="font-light "> {children} </div>
    </div>
    )
}

const FieldSection: React.FC = () => {
    return (
        
        <section className={"relative"}>
            <div className="static flex">
                <div className={"grid grid-rows-6 py-12 pl-3 w-screen"}>
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