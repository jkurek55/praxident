import React from "react";


const ContactSection:React.FC = () => {
    return (
        <section className="mt-8 mb-6 text-center">
                <div className="grid grid-cols-10 ">
                    <div className="font-sans font-bold col-span-4">Zapraszamy do kontaktu!</div>
                    <div className="bg-black rounded text-white h-12 pt-3 w-[120px] col-span-4">79 793 89 39</div>
                    <div className="bg-gray-400 rounded h-12 w-16 pt-3 col-span-2">SMS</div>
                </div>
        </section>
    )
}

export default ContactSection