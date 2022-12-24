import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {Form, Button} from "react-bootstrap";

const CustomForm = ({ status, message, onValidated }) => {


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });

    };

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    };


    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status !== "success" ? (
                <div className="mc__field-container">
                    <Form.Group className="m-0" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                        />
                        <button className="button-dark">
                            subscribe
                        </button>
                    </Form.Group>

                </div>
            ) : null}

            {/*Close button appears if form was successfully sent*/}

        </Form>
    );
};

const SubscribeForm = () => {
    const url = "https://gmail.us17.list-manage.com/subscribe/post?u=fe88f8cc67a2baf91b9548989&amp;id=921b2ce70e";
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
export default SubscribeForm;