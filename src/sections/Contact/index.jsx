import React from 'react';
import { Button } from '../../components';
import { contactImg } from '../../assets';
import './style.scss';

function Contact() {
    return (
        <div id='contact' className="section section-contact">
            <div className="text-center flow section-project-title">
                <h1 className="text-heading1 text-color-secondary">Contact</h1>
                <p className="subtitle-section text">
                    Your email information, name or anything will not be published
                </p>
            </div>
            <div className="section-contact__items">
                <div>
                    <img src={contactImg} alt="Contact" />
                </div>
                <form action="/" method="POST" className="flow">
                    <label className="text-funtional" htmlFor="name">
                        Your Name
                    </label>
                    <input type="text" id="name" placeholder="Your name" />
                    <label className="text-funtional" htmlFor="email">
                        Your Email
                    </label>
                    <input type="email" id="email" placeholder="Your email" />
                    <label className="text-funtional" htmlFor="message">
                        Your Message
                    </label>
                    <textarea type="text" id="message" placeholder="Write something ..." />
                    <Button value="Send" className="button-contact" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
