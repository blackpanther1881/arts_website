import React from 'react';
import ScrollTop from "../components/ScrollTop";
import Subscribe from "../containers/Subscribe";
import Footer from "../components/Footer";
import CartItem from "../containers/CartItem";

const Cart = () => {
    return (
        <>
            <ScrollTop/>
            <CartItem/>
            <Subscribe/>
            <Footer/>
        </>
    );
};
export default Cart;