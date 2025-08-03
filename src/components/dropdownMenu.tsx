import React from "react";


interface dropdownMenuProps{
    children: React.ReactNode
    className?: string
    relativeY: number
}


const DropdownMenu: React.FC<dropdownMenuProps> = ({children, className, relativeY}) => {
    return (
        <div className={`absolute xl:hidden top-[50px] right-[0] w-[400px] bg-[#C9C9C9]`}>
            <div className={`grid grid-rows-5 justify-items-stretch ${className}`}>
                {children}
            </div>
        </div>

    )
}

export default DropdownMenu