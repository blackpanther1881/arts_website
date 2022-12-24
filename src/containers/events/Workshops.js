import React, {useState} from 'react';
import ws11 from "../../assets/images/workshop/ws1/ws11.png";
import ws12 from "../../assets/images/workshop/ws1/ws12.png";
import ws13 from "../../assets/images/workshop/ws1/ws13.png";
import ws14 from "../../assets/images/workshop/ws1/ws14.png";
import ws15 from "../../assets/images/workshop/ws1/ws15.png";
import ws16 from "../../assets/images/workshop/ws1/ws16.png";
import ws17 from "../../assets/images/workshop/ws1/ws17.png";
import ws18 from "../../assets/images/workshop/ws1/ws18.png";
import ws19 from "../../assets/images/workshop/ws1/ws19.png";

import ws21 from "../../assets/images/workshop/ws2/ws21.png";
import ws22 from "../../assets/images/workshop/ws2/ws22.png";
import ws23 from "../../assets/images/workshop/ws2/ws23.png";
import ws24 from "../../assets/images/workshop/ws2/ws24.png";
import ws25 from "../../assets/images/workshop/ws2/ws25.png";
import ws26 from "../../assets/images/workshop/ws2/ws26.png";
import ws27 from "../../assets/images/workshop/ws2/ws27.png";

import ws31 from "../../assets/images/workshop/ws3/ws31.png";
import ws32 from "../../assets/images/workshop/ws3/ws32.png";
import ws33 from "../../assets/images/workshop/ws3/ws33.png";
import ws34 from "../../assets/images/workshop/ws3/ws34.png";
import ws35 from "../../assets/images/workshop/ws3/ws35.png";

import ws41 from "../../assets/images/workshop/ws4/ws41.png";
import ws42 from "../../assets/images/workshop/ws4/ws42.png";
import ws43 from "../../assets/images/workshop/ws4/ws43.png";
import ws44 from "../../assets/images/workshop/ws4/ws44.png";
import ws45 from "../../assets/images/workshop/ws4/ws45.png";
import ws46 from "../../assets/images/workshop/ws4/ws46.png";
import ws47 from "../../assets/images/workshop/ws4/ws47.png";
import ws48 from "../../assets/images/workshop/ws4/ws48.png";
import ws49 from "../../assets/images/workshop/ws4/ws49.png";

import ws51 from "../../assets/images/workshop/ws5/ws51.png";
import ws52 from "../../assets/images/workshop/ws5/ws52.png";
import ws53 from "../../assets/images/workshop/ws5/ws53.png";
import ws54 from "../../assets/images/workshop/ws5/ws54.png";
import ws55 from "../../assets/images/workshop/ws5/ws55.png";
import ws56 from "../../assets/images/workshop/ws5/ws56.png";
import ws57 from "../../assets/images/workshop/ws5/ws57.png";
import ws58 from "../../assets/images/workshop/ws5/ws58.png";
import ws59 from "../../assets/images/workshop/ws5/ws59.png";
import ws510 from "../../assets/images/workshop/ws5/ws510.png";


import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Workshops = () => {
    const [lightBoxImages, setLightBoxImages] = useState([]);
    const [lightBoxCaption, setLightBoxCaption] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

     const workShopList = [
         {
             name: "workshop1",
             caption: ["Charcoal Workshop", "Aromale, Hyderabad - 19 Jan, 2020"],
             images: [ws11, ws12, ws13, ws14, ws15, ws16, ws17,ws18, ws19]
         }, {
             name: "workshop2",
             caption: ["Charcoal Workshop", "Octospace, Hyderabad - 14 Aug, 2021"],
             images: [ws21, ws22, ws23, ws24, ws25, ws26, ws27]
         },
         {
             name: "workshop3",
             caption: ["Charcoal Workshop", "MNC Studio, Hyderabad - 31 Oct, 2021"],
             images: [ws31, ws32, ws33, ws34, ws35]
         },
         {
             name: "workshop4",
             caption: ["Acrylics  Workshops", "IIIT Hyderabad, Gachibowli - 4 Dec, 2021"],
             images: [ws41, ws42, ws43, ws44, ws45,ws46,ws47,ws48,ws49]
         },
         {
             name: "workshop5",
             caption: ["Urban Sketching", "MNC Studio, Hyderabad - 9 May, 2022"],
             images: [ws51, ws52, ws53, ws54, ws55,ws56,ws57,ws58,ws59, ws510]
         },
    ]

    const handleLightBox = (item) =>{
        setIsOpen(true);
        const items = workShopList.filter(s => s.name === item );
        console.log(items[0].images, "filter");
        setLightBoxImages(items[0].images);
        setLightBoxCaption(items[0].caption);
    }

    return (
        <section className="workshop-section">
            <div className="container">
                <p className="name">Events</p>
                <p className="heading">Workshops</p>
                <p className="text">Let’s join to learn more about art with lots of fun.</p>
            <div className="list">
                <div className="item animate__animated animate__fadeIn" >
                    <div className="img-section" onClick={() => handleLightBox('workshop1')}>
                        <img src={ws11} alt="workshopImage"/>
                    </div>
                    <div className="item-content">
                        <p className="item-name"> Charcoal Workshop (19 Jan, 2020)</p>
                    </div>
                </div>
                <div className="item animate__animated animate__fadeIn" >
                    <div className="img-section" onClick={() => handleLightBox('workshop2')}>
                        <img src={ws21} alt="workshopImage"/>
                    </div>
                    <div className="item-content">
                        <p className="item-name">Charcoal Workshop (14 Aug, 2021)</p>
                    </div>
                </div>
                <div className="item animate__animated animate__fadeIn" >
                    <div className="img-section" onClick={() => handleLightBox('workshop3')}>
                        <img src={ws31} alt="workshopImage"/>
                    </div>
                    <div className="item-content">
                        <p className="item-name">Charcoal Workshop (31 Oct, 2021)</p>
                    </div>
                </div>
                <div className="item animate__animated animate__fadeIn" >
                    <div className="img-section" onClick={() => handleLightBox('workshop4')}>
                        <img src={ws41} alt="workshopImage"/>
                    </div>
                    <div className="item-content">
                        <p className="item-name">Acrylics  Workshops (4 Dec, 2021)</p>
                    </div>
                </div>
                <div className="item animate__animated animate__fadeIn" >
                    <div className="img-section" onClick={() => handleLightBox('workshop5')}>
                        <img src={ws51} alt="workshopImage"/>
                    </div>
                    <div className="item-content">
                        <p className="item-name">Urban Sketching (9 May, 2022)</p>
                    </div>
                </div>

                <div className="item dummy">
                </div>
                <div className="item dummy">
                </div>
                <div className="item dummy">
                </div>
                <div className="item dummy">
                </div>
            </div>
            </div>
            {isOpen &&(
                <Lightbox
                    mainSrc={lightBoxImages[photoIndex]}
                    nextSrc={lightBoxImages[(photoIndex + 1) % lightBoxImages.length]}
                    prevSrc={lightBoxImages[(photoIndex + lightBoxImages.length - 1) % lightBoxImages.length]}
                    onCloseRequest={() => setIsOpen( false )}
                    onMovePrevRequest={() =>
                        setPhotoIndex( (photoIndex + lightBoxImages.length - 1) % lightBoxImages.length)
                    }
                    imageCaption={<div className="img-caption">
                        <p className="title">{lightBoxCaption[0]}</p>
                        <p className="info">{lightBoxCaption[1]}</p></div>}
                    onMoveNextRequest={() =>
                        setPhotoIndex( (photoIndex + 1) % lightBoxImages.length)
                    }
                />
            )}
        </section>
    );
};
export default Workshops;