import Carousel from "react-multi-carousel";
import React from "react";
import exhibition1 from "../../assets/images/exhibitions/slider1.png";
import exhibition2 from "../../assets/images/exhibitions/slider2.png";
import exhibition3 from "../../assets/images/exhibitions/slider3.png";

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
        url:exhibition1,
        image:exhibition1,
        title:"The Vision for Persistence",
        subtitle:"$XPRT TOKEN"
    },
    {
        url:exhibition2,
        image:exhibition2,
        title:"From the Founder’s Desk",
        subtitle:"MISSION 2022"
    }
];

const Exhibitions = ({ deviceType }) => {
    return (
        <section className="section-exhibitions">
            <div className="container">
                <p className="name">Events</p>
                <p className="heading">Exhibitions</p>
                <p className="text">Let’s join to learn more about art with lots of fun.</p>
                <div className="exhibitions-list row">
                    <div className="carousel-box col-md-6" data-aos="fade-up">
                        <div className="img-section">
                        <Carousel
                            ssr
                            partialVisbile
                            deviceType={deviceType}
                            itemClass="image-item"
                            responsive={responsive}
                            autoPlay={false}
                        >
                            {images.slice(0, 5).map(image => {
                                return (
                                    <>
                                        <a href={image.url} rel="noopener noreferrer"
                                           target="_blank"
                                           key={image.url}
                                           className="button">
                                            <img
                                                draggable={false}
                                                alt={image.image}
                                                style={{ width: "100%", height: "100%" }}
                                                src={image.image}
                                            />
                                            {/*<div className={'blog-title'}>*/}
                                            {/*    <h6>{image.subtitle}</h6>*/}
                                            {/*    <h5>{image.title}</h5>*/}
                                            {/*</div>*/}
                                        </a>
                                    </>
                                );
                            })}
                        </Carousel></div>
                        <div className="content">
                            <p className="item-name">MNC Studio, 08/05/22</p>
                        </div>
                    </div >
                    <div className="right col-md-6" data-aos="fade-up">
                        <div className="img-section">
                            <img src={exhibition3} alt={"exhibition3"} />
                        </div>
                        <div className="content">
                            <p className="item-name">MNC Studio, 08/05/22</p>
                        </div>
                    </div>
                </div>
              {/*<div className="list">*/}

              {/*    <div className="left">*/}
              {/*        <div className="img-section">*/}

              {/*        </div>*/}

              {/*    </div>*/}

              {/*</div>*/}
            </div>
        </section>
    );
};

export default Exhibitions;
