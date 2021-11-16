import React from 'react';
import '../App.css';
import aboutIMG from '../images/about-img.jpg';
import aboutIMG2 from '../images/about-img2.jpg';

export default function About() {
    return (
        <>
            <div className="route-about-box">
                <div className="background-filter left"></div>
                <div className="background-filter right"></div>
                <div className="background-filter second-right"></div>
                <div className="text-box">
                    <h3>Profesjonalny serwis betoniarni</h3>
                    <p>Oferujemy kompleksowe rozwiązania z branży mechaniki przemysłowej dotyczące doradztwa technicznego, montażu i uruchomienia serwisu, związanego z maszynami przemysłowymi w zakresie stacjonarnych i mobilnych węzłów do produkcji betonu towarowego, kruszarek i przesiewaczy do kruszyw, silosów na cement, taśmociągów i przenośników ślimakowych.
                        <br />
                        <br />
                        Zachęcamy do skorzystania z naszej oferty współpracy już od początku planowanej inwestycji w zakresie doboru maszyn o odpowiednich parametrach, a także spraw w zakresie uzyskania niezbędnych pozwoleń oraz przyłączenia nowej instalacji do sieci energetycznej i wodociągowej. Ponadto oferujemy profesjonalny nadzór nad montażem lub kierowanie procesem montażu i uruchomieniem maszyn przemysłowych związanych z produkcją betonu. Odrębnym zagadnieniem jest serwis gwarancyjny i pogwarancyjny.
                        <br />
                        <br />
                        Zachęcamy do skorzystania z naszej oferty przeglądów wykonywanych zgodnie z zaleceniami producenta zarówno w okresie gwarancyjnym jak i pogwarancyjnym. Odpowiednia kontrola, regulacja elementów i wymiana płynów eksploatacyjnych zapewnia długą bezawaryjną pracę. Dzięki naszej obsłudze w konsekwencji w zasadzie nie dochodzi do poważniejszych i zarazem kosztownych napraw, a wyeksploatowane elementy są wymieniane zgodnie z harmonogramem, dzięki czemu nie dochodzi do poważnych awarii i przestojów w trakcie sezonu produkcyjnego.</p>
                </div>
                <div className="about-images">
                    <img className='about-image-one' src={aboutIMG} alt="img" />
                    <img className='about-image-two' src={aboutIMG2} alt="img" />
                </div>
            </div>
        </>
    )
}
