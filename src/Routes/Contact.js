import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_vcdqxog', 'template_iz6k5oj', e.target, 'user_rJlig4QrDCQoBTMRscre6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <>
            <div className="route-contact-box">
                <div className="left-info">
                    <h2>Dane firmy</h2>
                    <p>
                        Nazwa: PRINSBUD Sławomir Czajka
                        <br />
                        Nazwa skrócona: PRINSBUD
                        <br />
                        Adres: Strzelce 92, 024-150 Nałęczów
                        <br />
                        NIP: 7162444802
                        <br />
                        REGON: 389993100
                        <br />
                        E-mail: prinsbud@gmail.com
                        <br />
                        Telefon: 724060954
                    </p>
                </div>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder='Imię' name='name' />
                    <input type="text" placeholder='Nazwa firmy' name='company' />
                    <input type="text" placeholder='E-mail' name='mail' />
                    <textarea type="text" placeholder='Wiadomość' name='message' />
                    <input className='sending-button' type="submit" value='Wyślij' />
                </form>
            </div>
        </>
    )
}
