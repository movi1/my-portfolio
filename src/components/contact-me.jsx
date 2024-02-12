import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contact-me.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactForm() {
  const [state, handleSubmit, resetForm] = useForm("xrgnplvd");

  if (state.succeeded) {
    return (
      <>
        <p className="success-message">Thanks for contacting me!</p>
        <button onClick={resetForm} className="reset-button">
          Return to Form
        </button>
      </>
    );
  }
  return (
    <>
      {/* Contact Form with Heading and Intro */}
      <div className="container" name="contact-me">
        <div className="row">
          {/* Contact Information with Icons Inside the Form */}
     
            {/* Form Fields */}
            <h1>Contact me</h1>
            <p className="contact-intro">
              Drop me a message through the form below!
            </p>
            <form onSubmit={handleSubmit} className="contact-form col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="name"
                name="name"
                className="form-control"
                placeholder="Tell me your full name"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                placeholder="you@something.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Enter Your Message"
                rows="4"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="custom-btn-primary"
            >
              Submit
            </button>
          </form>
  
          {/* Contact Information Section */}
          <div className="contact-info col-md-6 col-12 mx-auto">
            <h2>Contact Information</h2>
            <p>
              <span className="contact-label">Email:</span>
              <a href="mailto:moiracorradini@gmail.com">
                <FaEnvelope className="icon" /> moiracorradini@gmail.com
              </a>
            </p>
            <p>
              <span className="contact-label">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/moira-corradini/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" /> moira-corradini
              </a>
            </p>
            <p>
              <span className="contact-label">GitHub:</span>
              <a
                href="https://github.com/movi1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" /> movi
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
  }  

export default ContactForm;
