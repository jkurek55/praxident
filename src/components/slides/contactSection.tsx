import React from "react";


const ContactSection:React.FC = () => {
    return (
        <section>
            <div className="grid grid-cols-3">
                <div className="col-span-2 font-sans font-bold">Zapraszamy do kontaktu!</div>
                <div className="grid grid-cols-3">
                    <button className="col-span-2">79 793 89 39</button>
                    <button>SMS</button>
                </div>
            </div>


        </section>
    )
}

export default ContactSection