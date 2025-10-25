import React from "react";

interface headerContainerProps{
    children: React.ReactNode
    className?: string
}


const HeaderContainer: React.FC<headerContainerProps> = ({children, className}) => {
    return (
        <div className={`grid grid-rows-2 items-stretch justify-items-center xl:grid-cols-2 ${className}`}>
            {children}
        </div>
    )
}

export default HeaderContainer