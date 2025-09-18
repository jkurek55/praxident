import React from "react";


interface pageContainerProps{
    children: React.ReactNode;
    className?: string;
}

const PageContainer: React.FC<pageContainerProps> = ({children, className}) => {
    return (
        <div className={`flex-col bg-[#D4D4D4] ${className}`}>
            {children}
        </div>
    )
}

export default PageContainer