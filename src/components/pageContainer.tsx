import React from "react";


interface pageContainerProps{
    children: React.ReactNode;
    className?: string;
}

const PageContainer: React.FC<pageContainerProps> = ({children, className}) => {
    return (
        <div className={`grid-rows-2 bg-[#D4D4D4] ${className}`}>
            {children}
            <footer className={"text-center"}>
            <p>© {new Date().getFullYear()} Praxident</p>
            </footer>
        </div>
    )
}

export default PageContainer