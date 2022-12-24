import React from 'react';
import {Form, Button} from "react-bootstrap";
import SubscribeForm from "./Form";


const Subscribe = () => {
    return (
        <section className="subscribe-section">
            <div className="content">
                <p className="heading">Sign up to MNC Artist's newsletter</p>
                <p className="text">Get all the latest news from Neha Verma, special offers, workshop updates and more!</p>
            </div>
           <SubscribeForm/>
        </section>
    );
};
export default Subscribe;