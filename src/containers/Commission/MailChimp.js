import React, { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Form } from "react-bootstrap";
let mailURl = "https://gmail.us17.list-manage.com/subscribe/post?u=fe88f8cc67a2baf91b9548989&amp;id=921b2ce70e"

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [budget, setBudget] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        budget &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            FNAME: firstName,
            LNAME: lastName,
            MMERGE3: phoneNumber,
            MMERGE4: budget,
        });

    };
    return (
        <Form onSubmit={(e) => handleSubmit(e)} className="mail-chimp">


            {status === "sending" && (

                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: "We have already received your message" }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: "Thanks for your message, We'll get back to you as soon as possible" }}
                />
            )}

            {status !== "success" ? (
                <div className="mc__field-container">
                    <div className="form-group">
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            required={true}
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            required={true}
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            required={true}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <Form.Control
                            type="number"
                            placeholder="+91 Phone Name"
                            required={true}
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <Form.Control as="select" custom  onChange={(e)=>setBudget(e.target.value)}>
                        <option>My Budget is...</option>
                        <option>Under ₹ 10,000</option>
                        <option>₹ 10,000 - 30,000</option>
                        <option>₹ 30,000 - 50,000</option>
                        <option>₹ 50,000 - 1,00,000</option>
                        <option>More than ₹ 1 Lakh</option>
                    </Form.Control>
                    <button className="button-buy">Submit</button>
                </div>

            ) : null}
            {/*Close button appears if form was successfully sent*/}

        </Form>
    );
};

const MailChimp = () => {
    const url = `${mailURl}`
    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    );
};
export default MailChimp;