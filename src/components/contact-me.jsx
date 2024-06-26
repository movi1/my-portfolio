import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contact-me.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactForm() {
  const [state, handleSubmit, resetForm] = useForm("xrgnplvd");
  if (state.succeeded) {
    return (
      <div className="container-contact" name="contact-me">
        <p className="success-message">Thanks for contacting me!</p>
        <button onClick={resetForm} className="reset-button">
          Return to Form
        </button>
      </div>
    );
  }


  return (
    <div className="container-fluid container-contact" name="contact-me">
      <div className="row-contact">
        <div className='contact-me-container'>
          <div className="col-12 mb-4">
            <h1 className='contact-title'>Contact me</h1>
            <p className="contact-intro">
              Drop me a message through the form below!
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
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
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}

        <div className="contact-info">
          
          <div className="col-12 mb-4">
            <h2 className='contact-info-title'>Contact Information</h2>
            <p>
              <span className="contact-label">Email:</span>
              <a href="mailto:moiracorradini@gmail.com" className="link-contact-info">

                <FaEnvelope size={20} className="icon" /> moiracorradini@gmail.com
              </a>
            </p>
            <p>
              <span className="contact-label">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/moira-corradini/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-contact-info"
              >
                <FaLinkedin size={20} className="icon" /> moira-corradini
              </a>
            </p>
            <p>
              <span className="contact-label">GitHub:</span>
              <a
                href="https://github.com/movi1"
                target="_blank"
                rel="noopener noreferrer"
                className="link-contact-info"
              >
                <FaGithub size={20} className="icon" /> movi
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
