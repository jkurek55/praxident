import React from "react";

interface transparentBoxProps{
    children: React.ReactNode
    className?: string
}

const TransparentBox: React.FC<transparentBoxProps> = ({children, className}) => {
    return (
        <div className={`grid grid-cols-5 border-2 border-solid border-black text-center content-center h-[200px] w-[1300px] gap-4 px-4 font-normal ${className}`}>
            {children}
        </div>
    )
}

export default TransparentBox