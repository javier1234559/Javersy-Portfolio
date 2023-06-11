import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { Button, ToastNotifiation } from '../../components';
import { ToastContext } from '../../context';
import { contactImg } from '../../assets';
import './style.scss';

function Contact() {
    const { showToast, hideToast, toastType, toastMessage } = useContext(ToastContext);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const inputs = form.current.querySelectorAll('input, textarea');

        let isValid = true;

        inputs.forEach((input) => {
            if (input.value === null || input.value.trim() === '') {
                showToast('typefailed', 'Please enter a valid input');
                isValid = false;
                console.log(input.value);
                return;
            }
        });

        if (!isValid) {
            return;
        }

        emailjs
            .sendForm('service_cd12mpc', 'template_nuqeyul', form.current, 'aVJu4obsVonrl47uI')
            .then(
                (result) => {
                    showToast('typesubmited', 'Your message has been submited');
                },
                (error) => {
                    showToast('typefailed', 'Something wrong');
                }
            );
    };

    return (
        <div id="contact" className="section section-contact">
            <div className="text-center flow section-project-title animate-showin">
                <h1 className="text-heading1 text-color-secondary">Contact</h1>
                <p className="subtitle-section text">
                    Your email information, name or anything will not be published
                </p>
            </div>
            <div className="section-contact__items">
                <div>
                    <img src={contactImg} alt="Contact" />
                </div>
                <form ref={form} className="flow" onSubmit={sendEmail}>
                    <label className="text-funtional" htmlFor="name">
                        Your Name
                    </label>
                    <input type="text" id="name" placeholder="Your name" name="user_name" />
                    <label className="text-funtional" htmlFor="email">
                        Your Email
                    </label>
                    <input type="email" id="email" placeholder="Your email" name="user_email" />
                    <label className="text-funtional" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        type="text"
                        id="message"
                        placeholder="Write something ..."
                        name="message"
                    />
                    <Button value="Send" className="button-contact" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
