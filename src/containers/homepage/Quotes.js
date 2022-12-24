import React from 'react';
import AOS from 'aos';
import Icon from "../../components/Icon";

AOS.init({});

const Quotes = () => {
    return (
        <section className="quote-section" data-aos="fade-up">
            <div className="container">
                <div className="text">
                    <p>
                        Every face has its own story and every story is unique.
                        Through the body of my work I try to capture those intruging stories.
                    </p>
                </div>
                <div className="button-section">
                    <a className="button-read"
                       href="https://www.instagram.com/mnc_artist/"
                       target={"_blank"}
                       rel="noopener noreferrer"
                    >
                        Follow me
                        <Icon
                            icon="instagram"
                            viewClass="instagram"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Quotes;