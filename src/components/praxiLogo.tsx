import praxiLogo from '../images/praxiLogo.webp'
import React from 'react';

interface PraxiLogoProps {
  className?: string;
  onClick?: () => void
  alt: string
}

const PraxiLogo: React.FC<PraxiLogoProps> = ({ className = '', onClick, alt}) => {
    return (
    <img src={praxiLogo} alt={alt} onClick={onClick} className={`h-[152px] md:h-[304px] cursor-pointer ${className}`}/>
    );
};

export default PraxiLogo

