import React from 'react';
import {list} from "../../config";
import { useNavigate } from 'react-router-dom';

const StoreCollection = () => {
    const navigate = useNavigate();

    const handleRoute = (item) =>{
        navigate('/cart',{state:{item:item}});
    }


    return (
        <section className="store-section">
            <div className="container">
                <p className="name">STORE</p>
                <p className="heading">Artwork</p>
                <p className="text">Here is a selection of available art from Neha Verma. Please make an email
                    enquiry for pricing and availability of original drawings.</p>
                <div className="list">
                    {
                        list.map((item, index) => (
                            <div className="item animate__animated animate__fadeIn" key={index} >
                                <div className="img-section">
                                    <img src={item.imgUrl} alt={item.name} />
                                </div>
                                <div className="item-content">
                                    <p className="item-name">{item.name}</p>
                                    <button className="button-buy" onClick={()=>handleRoute(item)}>View</button>
                                </div>
                            </div>
                        ))
                    }
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
        </section>
    );
};
export default StoreCollection;