import React from "react";

const CustomFooter:React.FC = () => {
    return (
    
    <footer className={"text-center"}>
        
        <p>© {new Date().getFullYear()} Praxident</p>
    </footer>
    )
}

export default CustomFooter