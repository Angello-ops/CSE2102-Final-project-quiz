import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Contact() {
  const [rating, setRating] = useState('');
  const [reason, setReason] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!validateEmail(userEmail)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!rating) {
      validationErrors.rating = 'Please select a rating';
    }
    if (reason.trim() === '') {
      validationErrors.reason = 'Please provide your feedback';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const templateParams = {
      user_email: userEmail,
      subject,
      rating,
      reason,
    };

    emailjs
      .send(
        'service_w83aohr', // Replace with your EmailJS service ID
        'template_q9wqxoi', // Replace with your EmailJS template ID
        templateParams,
        'YwvsfpFypdOfwcA6m' // Replace with your EmailJS public key
      )
      .then(
        () => {
          console.log('Email sent successfully!');
          navigate('/thank-you'); // Redirect to the Thank You page
        },
        (err) => {
          console.error('Email sending failed...', err);
        }
      );
  };

  return (
    <div className="contact-container" style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="userEmail" style={styles.label}>
            Your Email:
          </label>
          <input
            id="userEmail"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="subject" style={styles.label}>
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter the subject"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="rating" style={styles.label}>
            Rate our website (1-5):
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            style={styles.select}
          >
            <option value="">Select Rating</option>
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
          {errors.rating && <span style={styles.error}>{errors.rating}</span>}
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="reason" style={styles.label}>
            Comments or Suggestions:
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Let us know your thoughts..."
            style={styles.textarea}
          ></textarea>
          {errors.reason && <span style={styles.error}>{errors.reason}</span>}
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
    container: {
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    header: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      alignItems: 'center', // Ensures all inputs are center-aligned
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%', // Ensures inputs span the full container width
      maxWidth: '500px', // Constrains the width for better aesthetics
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%',
    },
    select: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%',
    },
    textarea: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%', // Ensures textarea spans the available width
      minHeight: '100px',
      resize: 'none', // Prevents resizing
    },
    button: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      textAlign: 'center',
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginTop: '5px',
    },
  };

export default Contact;
