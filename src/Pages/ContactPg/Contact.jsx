import React, { useState } from 'react';
import './Contact.css';
import { Row, Col } from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  message: yup.string().required('Message is required')
});

const Contact = () => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(formdata, { abortEarly: false });
      setError({});
      console.log('Form submitted successfully:', formdata);
      alert('Form submitted successfully!');


      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (validationErrors) {
      const errorMessages = {};
      validationErrors.inner.forEach(err => {
        errorMessages[err.path] = err.message;
      });
      setError(errorMessages);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-one">
        <Row>
          <Col className="contact-info">
            <form onSubmit={handleSubmit} className="contact-form">

              <label>Name</label>
              <input
                type="text"
                value={formdata.name}
                onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
              />
              {error.name && <p className="error-message">{error.name}</p>}

              <label>Email</label>
              <input
                type="email"
                value={formdata.email}
                onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
              />
              {error.email && <p className="error-message">{error.email}</p>}

              <label>Phone</label>
              <input
                type="tel"
                value={formdata.phone}
                onChange={(e) => setFormData({ ...formdata, phone: e.target.value })}
              />
              {error.phone && <p className="error-message">{error.phone}</p>}

              <label>Message</label>
              <textarea
                rows="4"
                value={formdata.message}
                onChange={(e) => setFormData({ ...formdata, message: e.target.value })}
              />
              {error.message && <p className="error-message">{error.message}</p>}

              <button type="submit">Submit</button>
            </form>
          </Col>
        </Row>
      </div>

      <div className="contact-two">
        <Row>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20929.519569449403!2d77.40804784350628!3d8.176484183086838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0dfc0ddc7b7%3A0x809a9e32a95d3ed1!2sNagercoil%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1766468069395!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
