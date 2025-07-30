import React from "react";



interface headerRowProps{
    children: React.ReactNode
    className?: string
}

const HeaderRow: React.FC<headerRowProps> = ({children, className}) => {
    return (
        <div className={"flex justify-between"}>
            {children}
        </div>
    )
}

export default HeaderRow