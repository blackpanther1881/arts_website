import React from 'react';
import StoreCollection from "../containers/store/StoreCollection";
import Subscribe from "../containers/Subscribe";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
const Store = () => {
    return (
        <>
            <ScrollTop/>
            <StoreCollection/>
            <Subscribe/>
            <Footer/>
        </>
    );
};
export default Store;