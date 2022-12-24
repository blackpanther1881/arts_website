
import React from 'react';
import AOS from 'aos';
import trans_image from "../../assets/images/trans_life.svg";
import {list} from "../../config";
import { useNavigate } from 'react-router-dom';

AOS.init({});

const Trans = () => {
    const navigate = useNavigate();
    const selected = list.find(element => element.name === "Trans Life");

    const handleRoute = () =>{
        navigate('/cart',{state:{item:selected}});
    }

    return (
        <section className="trans-section">
            <div className="container">
                <div className="left" data-aos="fade-up">
                    <p className="title">TRANS LIFE <span className="sub-title">(From Trans Series)</span></p>
                    <p className="content">
                        Every face has its own story and every story is unique.
                        Through the body of my work I try to capture those intruging stories.
                    </p>
                    <div className="button-section">
                        <a className="button-dark" onClick={handleRoute}>View</a>
                    </div>
                </div>
                <div className="right" data-aos="fade-up">
                    <img src={trans_image} alt="trans_image" />
                </div>
            </div>
        </section>
    );
};
export default Trans;