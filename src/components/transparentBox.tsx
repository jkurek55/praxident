import React from "react";

interface transparentBoxProps{
    children: React.ReactNode
    className?: string
}

const TransparentBox: React.FC<transparentBoxProps> = ({children, className}) => {
    return (
        <div className={`hidden xl:grid grid-cols-3 
        font-semibold text-xl xl:text-3xl
        border-2 border-solid border-black 
        content-center gap-4 px-4
        h-[200px] w-[1300px] 2xl:h-60 2xl:max-w-4xl
        ${className}`}>
            {children}
        </div>
    )
}

export default TransparentBox