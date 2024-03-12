import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch('https://formspree.io/f/xayrbler', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      setMessage(<div>Thank you for your submission!</div>);
      setFormSubmitted(true);
    } catch (error) {
      setMessage(<div>Error submitting the form. Please try again later.</div>);
    }
  };

  return (
    <div className="contact-content">
      <form className="form" onSubmit={submit}>
        <h1>Contact Me!</h1>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input className="input" name="name" id="name" required></input>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="comment">
            Comment:
          </label>
          <textarea className="textarea" name="comment" id="comment"></textarea>
        </div>
        <div className="contact-buttons">
          <button
            className="contact-btn submit"
            type="submit"
            disabled={formSubmitted}
          >
            Submit
          </button>
        </div>
        <div className="message">{message}</div>
      </form>
    </div>
  );
};

export default Contact;
