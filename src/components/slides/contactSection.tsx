import React from "react";


const ContactSection:React.FC = () => {
    return (
        <section className="text-center py-8
        2xl:py-16
        bg-gray-100
        ">
            <div className="2xl:flex 2xl:items-center 2xl:px-24">
                <div className="font-sans font-bold 2xl:text-6xl">Zapraszamy do kontaktu!</div>
                <div className="flex-grow"></div>
                <div className="flex items-center 2xl:gap-6 2xl:text-4xl font-sans">
                    <div className="bg-black rounded text-white 2xl:p-5">79 793 89 39</div>
                    <div className="bg-gray-400 rounded 2xl:p-5">SMS</div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection