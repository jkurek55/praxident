import React from "react";

interface buttonProps{
    onClick?: () => void
    children: React.ReactNode
}

export const Button: React.FC<buttonProps> = ({onClick, children}) => {
    return (
        <div onClick={onClick} className={
            `flex items-center justify-center text-xl h-[100px] cursor-pointer`
            }>
            {children}
        </div>
    )

}

export const DashedButton: React.FC<buttonProps> = ({onClick, children}) => {
    return (
        <div onClick={onClick} className={
            `flex items-center justify-center text-xl border-dashed border-[3px] h-[100px] cursor-pointer`
            }>
            {children}
        </div>
    )

}

export const BlackButton: React.FC<buttonProps> = ({onClick, children}) => {
    return (
        <div onClick={onClick} className={
            `flex items-center justify-center text-xl text-white bg-black rounded h-[100px] cursor-pointer`
            }>
            {children}
        </div>
    )

}
