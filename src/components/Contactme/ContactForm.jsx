import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sparkle from "../../assets/images/icons/sparkle.png"
import { handleHideElement, handleShowElement } from '../../utils/handleFunctions';

const ContactForm = () => {
    const form = useRef();

    const validationSchema = Yup.object({
        user_name: Yup.string()
            .required('Name is required')
            .min(2, 'Name should be at least 2 characters'),
        user_email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
    });

    const handleFormSubmit = (setSubmitting, resetForm) => {
        emailjs.sendForm(
            'service_srroabs',
            'template_be8mfzk',
            form.current,
            'ZqK2npU3f6KiLlDka')
            .then((result) => {
                setSubmitting(false);
                resetForm();
            }, (error) => {
                console.log(error.text);
            });
        console.log("set submit check")
    }

    return (
        <div className='form-block'>
            <Formik
                initialValues={{ user_name: '', user_email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleFormSubmit(setSubmitting, resetForm)
                }}

            >
                {({ isSubmitting }) => (
                    <Form ref={form} name="contact" netlify>
                        <div className='name-block'>
                            <label htmlFor="name">Name:</label>
                            <Field type="text" id="name" name="user_name" placeholder="Enter your name" />
                            <ErrorMessage name="user_name" component="div" className="error" />
                        </div>
                        <div className='email-block'>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="user_email" placeholder="Enter your email" />
                            <ErrorMessage name="user_email" component="div" className="error" />
                        </div>
                        <div className='message-block'>
                            <label htmlFor="message">Message:</label>
                            <Field as="textarea" id="message" name="message" placeholder="Write a message about your project, collaboration ideas, or any questions you have. I'd love to hear from you!" />
                            <ErrorMessage name="message" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className='cta-button'
                            onMouseEnter={handleHideElement}
                            onMouseLeave={handleShowElement}>
                            Submit
                            <img src={sparkle} alt='sparkle' className='sparkle1' />
                            <img src={sparkle} alt='sparkle' className='sparkle2' />
                            <img src={sparkle} alt='sparkle' className='sparkle3' />
                            <img src={sparkle} alt='sparkle' className='sparkle4' />
                            <img src={sparkle} alt='sparkle' className='sparkle5' />
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm
