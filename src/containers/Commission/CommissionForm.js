import React from 'react';
import AOS from 'aos';
import MailChimp from "./MailChimp";

AOS.init({});

const CommissionForm = () => {
    return (
        <section className="section-commission-form" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="left col-md-6">
                        <p className="title">
                            Commissioning art can be one of the most rewarding aspects of any purchase.
                        </p>
                        <p>
                            I have a number of years of experience in creating portraits all
                            across the world and laising between clients and the artists.
                        </p>

                        <p>Art commissions often need to be planned in such a way that it satisfies the client
                            within the given time frame and budget. It is also important to allow sufficient time
                            for the artist to produce and deliver the work within a reasonable period.
                        </p>
                        <p>
                        We will guide you through the process and keep you updated in the progress of the project
                            to ensure that it is completed on time and in budget.
                        </p>
                    </div>
                    <div className="right col-md-6">
                        <p className="note">
                            Please complete the form below and we will be in touch.
                        </p>
                        <MailChimp/>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default CommissionForm;