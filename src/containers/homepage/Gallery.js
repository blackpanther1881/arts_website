import React from 'react';
import gallery1 from "../../assets/images/homepage/gallery1.svg";
import gallery2 from "../../assets/images/homepage/gallery2.svg";
import gallery3 from "../../assets/images/homepage/gallery3.svg";
import AOS from 'aos';

AOS.init({});

const Gallery = () => {
    return (
        <section className="section-gallery">
            <div className="left">
                <img src={gallery1} alt="gallery1" data-aos="fade-up"/>
                <img src={gallery3} alt="gallery3" data-aos="fade-up"/>
            </div>
            <div className="right">
                <div className="image-container">
                    <img src={gallery2} alt="gallery2" data-aos="fade-up"/>
                </div>
            </div>
        </section>
    );
};
export default Gallery;