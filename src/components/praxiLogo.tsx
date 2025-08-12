// components/Container.tsx
import praxiLogo from '../images/praxiLogo.png'
import React from 'react';

interface PraxiLogoProps {
  componentSizes?: [number, number, number, number, number] // [sm, md, lg, x1, 2x1]
  className?: string;
  onClick?: () => void
  alt: string
}

const PraxiLogo: React.FC<PraxiLogoProps> = ({ componentSizes, className = '', onClick, alt}) => {
    if (!componentSizes) {const componentSizes = [300, 400, 500, 600, 700]}
    return (
    <img src={praxiLogo} onClick={onClick} className={`w-[300px] md:w-[600px] xl:w-[600px] alt=${alt} cursor-pointer ${className}`}/>
    );
};

export default PraxiLogo

