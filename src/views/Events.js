import React from 'react';
import Workshops from "../containers/events/Workshops";
import Subscribe from "../containers/Subscribe";
import Footer from "../components/Footer";
import Exhibitions from "../containers/events/Exhibitions";
import ScrollTop from "../components/ScrollTop";

const Events = () => {
    return (
        <>
            <ScrollTop/>
            <Workshops/>
            {/*<Exhibitions/>*/}
            <Subscribe/>
            <Footer/>
        </>
    );
};
export default Events;