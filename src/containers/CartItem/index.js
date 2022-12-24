import React from 'react';
import {Form} from "react-bootstrap";
import {useLocation} from 'react-router-dom';
const CartItem = () => {
    const location = useLocation();
    console.log(location.state, "Dat");
    const imgUrl = location.state.item.imgUrl;
    return (
        <section className="cart-section">
            <div className="container">
                {location.state.item ?
                    <div className="item">
                        <div className="left">
                            <img src={imgUrl} alt={""}/>
                        </div>
                        <div className="right">
                            <p className="type">Store / {location.state.item.name} - {location.state.item.type}</p>
                            <p className="name">{location.state.item.name}</p>
                            <p className="info">{location.state.item.description}</p>
                            {/*<p className="price">₹ {location.state.item.price}</p>*/}
                            {/*<div className="add-cart">*/}
                            {/*    <Form.Control*/}
                            {/*        type="text"*/}
                            {/*        placeholder="0"*/}
                            {/*        required={true}*/}
                            {/*    />*/}
                            {/*    <button className="button-dark">*/}
                            {/*        ADD TO CART*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    : ""
                }
            </div>
        </section>
    );
};
export default CartItem;