import React from "react";

interface textLabelProps{
    className: string
    children: React.ReactNode
}


const TextLabel: React.FC<textLabelProps> = ({className, children}) => {
    return (
        <div className={`flex items-center justify-center text-xl font-light ${className}`}>
            {children}
        </div>
    )
}

export default TextLabel