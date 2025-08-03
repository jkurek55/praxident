// components/Container.tsx
import praxiLogo from '../images/praxiLogo.png'
import React from 'react';

interface PraxiLogoProps {
  componentSizes?: [number, number, number, number, number] // [sm, md, lg, x1, 2x1]
  className?: string;
}

const PraxiLogo: React.FC<PraxiLogoProps> = ({ componentSizes, className = '' }) => {
    if (!componentSizes) {const componentSizes = [300, 400, 500, 600, 700]}
    return (
    <img src={praxiLogo} className={`w-[400px] md:w-[600px] xl:w-[600px] ${className}`}/>
    );
};

export default PraxiLogo

