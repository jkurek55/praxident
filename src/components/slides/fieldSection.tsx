import React from "react";
import unit from '../../images/2.jpg';

interface rowProps{
    children: React.ReactNode
    className?: string
}

const Row:React.FC<rowProps> = ({children, className}) => {
    return (
    <div className="flex items-center text-8xl gap-4 ">
        <div className={"w-8 h-8 bg-orange-500 rounded-full"}/>
        <div className="font-light"> {children} </div>
    </div>
    )
}

const FieldSection: React.FC = () => {
    return (
        
        <section className={"relative h-[1200px]"}>
            <img className={"absolute h-[1200px] right-0 "}
             src={unit} alt="unit" />
            <div className={"absolute flex flex-col gap-[20px] items-stretch left-[30px] top-[200px]"}>
                <Row> Stomatologia zachowawcza </Row>
                <Row> Stomatologia dziecięca </Row>
                <Row> Protetyka stomatologiczna </Row>
                <Row> Endodoncja </Row>
                <Row> Chirurgia stomatologiczna </Row>
                <Row> Ortodoncja </Row>
            </div>


        </section>
    )
}

export default FieldSection