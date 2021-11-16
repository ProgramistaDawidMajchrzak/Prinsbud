import React from 'react';

export default function Contact() {
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
                <form>
                    <input type="text" placeholder='Imię' />
                    <input type="text" placeholder='Nazwa firmy' />
                    <input type="text" placeholder='E-mail' />
                    <textarea type="text" placeholder='Wiadomość' />
                    <input className='sending-button' type="submit" value='Wyślij' />
                </form>
            </div>
        </>
    )
}
