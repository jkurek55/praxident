import React from "react";


const ContactSection:React.FC = () => {
    return (
        <section className="text-center
        py-6 xs:py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16
        bg-gray-100
        ">
            <div className="flex 
            px-4 xs:px-8 sm:px-10 md:px-12 lg:px-16 xl:px-24
            ">
                <div className="font-sans font-bold content-center
                text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl
                ">Zapraszamy do kontaktu!</div>
                <div className="flex-grow"></div>
                <div className="flex items-center 
                 gap-2 xs:gap-6
                 text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  2xl:text-4xl 
                font-sans
                ">
                    <div className="bg-black rounded text-white 
                    p-1 xs:p-1 md:p-2 lg:p-3 xl:p-4 2xl:p-5
                    ">79 793 89 39</div>
                    <div className="bg-gray-400 rounded 
                    p-1 xs:p-1 md:p-2 lg:p-3 xl:p-4 2xl:p-5
                    ">SMS</div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection