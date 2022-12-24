import React from 'react';
import kapil from "../../assets/images/kapil.png";

const SectionBanner = () => {
    return (
        <section className="section-commission-banner">
            <div className="img-section">
                <img src={kapil} alt="kapil" />
            </div>
            <div className="content animate__animated animate__fadeInUp">
                <p className="heading">COMMISSION</p>
                <p className="title">Art</p>
                <p className="qoute">Would you like to own a commissioned piece of art created by Neha Verma?</p>
            </div>
        </section>

    );
};
export default SectionBanner;