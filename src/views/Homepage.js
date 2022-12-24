import React from 'react';
import SectionBanner from "../containers/homepage/SectionBanner";
import Trans from "../containers/homepage/Trans";
import Quotes from "../containers/homepage/Quotes";
import Footer from "../components/Footer";
import Subscribe from "../containers/Subscribe";
import ScrollTop from "../components/ScrollTop";
const HomePage = () => {
    return (
     <>
         <ScrollTop/>
         <SectionBanner/>
         {/*<Slider/>*/}
         <Quotes/>
         <Trans/>
         <Subscribe/>
         <Footer/>
         </>
    );
};
export default HomePage;