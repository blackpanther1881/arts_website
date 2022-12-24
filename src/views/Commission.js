import React from 'react';
import Workshops from "../containers/events/Workshops";
import Subscribe from "../containers/Subscribe";
import Footer from "../components/Footer";
import Exhibitions from "../containers/events/Exhibitions";
import SectionBanner from "../containers/Commission/SectionBanner";
import CommissionForm from "../containers/Commission/CommissionForm";
import ScrollTop from "../components/ScrollTop";

const Commission = () => {
    return (
        <>
            <ScrollTop/>
            <SectionBanner/>
            <CommissionForm/>
            <Subscribe/>
            <Footer/>
        </>
    );
};
export default Commission;