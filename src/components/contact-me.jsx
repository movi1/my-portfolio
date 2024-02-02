// ContactPage.js
import React from 'react';
import { useFormik } from 'formik';
import '../styles/contact-me.css';

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: (values) => {
      // Handle form submission, e.g., send an email
      console.log(values);
    },
  });

  return (
    <div className="form-container">
      <h2>Contact Me</h2>
      <form className="form" onSubmit={formik.handleSubmit}>
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="input"
          />
        </label>

        <label className="label">
          Email:
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="input"
          />
        </label>

        <button type="submit" className="button">
          Submit
        </button>
      </form>

      <div className="contact-info">
        <p>Email: your.email@example.com</p>
        <p>WhatsApp: +1234567890</p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/your-github-username
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/your-linkedin-username
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

