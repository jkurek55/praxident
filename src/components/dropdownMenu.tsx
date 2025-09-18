import React from "react";


interface dropdownMenuProps{
    children: React.ReactNode
    ref: React.Ref<HTMLDivElement | null>
    className?: string
    relativeY: number
}


const DropdownMenu: React.FC<dropdownMenuProps> = ({children, className, ref, relativeY}) => {
    return (
        <div ref={ref} className={`absolute xl:hidden top-9 right-[0] w-[400px] bg-[#C9C9C9]`}>
            <div className={`grid grid-rows-3 justify-items-stretch ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default DropdownMenu