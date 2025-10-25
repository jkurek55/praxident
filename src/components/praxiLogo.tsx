// components/Container.tsx
import praxiLogo from '../images/praxiLogo.png'
import React from 'react';

interface PraxiLogoProps {
  className?: string;
  onClick?: () => void
  alt: string
}

const PraxiLogo: React.FC<PraxiLogoProps> = ({ className = '', onClick, alt}) => {
    return (
    <img src={praxiLogo} onClick={onClick} className={`w-[300px] md:w-[600px] xl:w-[600px] alt=${alt} cursor-pointer ${className}`}/>
    );
};

export default PraxiLogo

