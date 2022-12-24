import React from 'react';
import neha from "../../assets/images/neha.svg";
import Carousel from "react-multi-carousel";
import slider1 from "../../assets/images/home_banner/slider1.png";
import slider2 from "../../assets/images/home_banner/slider2.png";
import slider3 from "../../assets/images/home_banner/slider3.png";
import slider4 from "../../assets/images/home_banner/slider4.png";



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const images = [
    {
        url:slider1,
        image:slider1,
        title:"The Vision for Persistence",
        subtitle:"$XPRT TOKEN"
    },
    {
        url:slider2,
        image:slider2,
        title:"From the Founder’s Desk",
        subtitle:"MISSION 2022"
    },
    {
        url:slider3,
        image:slider3,
        title:"From the Founder’s Desk",
        subtitle:"MISSION 2022"
    }
    ,
    {
        url:slider4,
        image:slider4,
        title:"From the Founder’s Desk",
        subtitle:"MISSION 2022"
    }
];

const SectionBanner = ({ deviceType }) => {
    return (
        <section className="section-banner">
            <div className="carousel-container">
                <Carousel
                    ssr
                    infinite={true}
                    partialVisbile
                    deviceType={deviceType}
                    itemClass="image-item"
                    autoPlaySpeed={3000}
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    autoPlay={true}
                >
                    {images.slice(0, 5).map(image => {
                        return (
                            <>
                                <img
                                    draggable={false}
                                    alt={image.image}
                                    style={{ width: "100%", height: "100%" }}
                                    src={image.image}
                                />
                            </>
                        );
                    })}
                </Carousel>
            </div>
            <div className="content animate__animated animate__fadeInUp">
                <p className="qoute">HYPER-REALISTIC DRAWINGS</p>
                <p className="title">NEHA VERMA</p>
            </div>
            <div className="profile-section" data-aos="fade-in">
                <img src={neha} alt="profile" width={"600"} height={"600"} />
            </div>
                {/*<div className="text-left">*/}
                {/*    <span className="initial-text">Charcoal on Paper </span>*/}
                {/*    <span>Color Pencils, Acrelics</span>*/}
                {/*</div>*/}
                {/*<div className="banner-image">*/}
                {/*    <div className="letters-box">*/}
                {/*        <div className="letter animate__animated animate__rollIn">N</div>*/}
                {/*        <div className="letter animate__animated animate__slideInDown">E</div>*/}
                {/*        <div className="letter animate__animated animate__fadeInTopLeft">H</div>*/}
                {/*        <div className="letter animate__animated animate__slideInRight">A</div>*/}
                {/*    </div>*/}
                {/*    <img src={bannerImage} className="animate__animated animate__zoomIn" alt="bannerImage"/>*/}

                {/*</div>*/}
                {/*<div className="text-right">*/}
                {/*    <span>Hyderbad</span>*/}
                {/*</div>*/}

        </section>

    );
};
export default SectionBanner;