// ContactPage.js
import React from 'react';
import { useFormik } from 'formik';
import '../styles/contact-me.css'; // Make sure you have Bootstrap styles included in your project

const ContactMe = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="contact-page">
      <h1 className="text-center mb-4">Contact Me</h1>

      <div className="form-container p-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className="form-control"
              rows="4"
            />
          </div>
          <button type="submit" className="custom-btn-primary">Submit</button>

        </form>
      </div>

      <div className="contact-details p-4">
        <p>Email: moiracorradini@gmail.com</p>
        <p>WhatsApp: 07876245271</p>

        <p>
          GitHub:
          <a href="https://github.com/movi1" target="_blank" rel="noopener noreferrer">
            github.com/movi1
          </a>
        </p>

        <p>
          LinkedIn:
          <a href="https://www.linkedin.com/in/moira-corradini/" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/moira-corradini/
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactMe;

