import React from "react";
import {IoLogoWhatsapp} from 'react-icons/io';

const WhatsappButton = () => {
    const handleWhatsappClick = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=598987654321';
    };

    return (
        <button className="whatsapp-button"
            onClick={handleWhatsappClick}>
            <IoLogoWhatsapp size={60}
                color="#25D366"/>
        </button>
    );
};

export default WhatsappButton;
