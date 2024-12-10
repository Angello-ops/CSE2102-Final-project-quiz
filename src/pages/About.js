import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Us</h1>
      <p>
        Welcome to my rendition of the stubb page! This project is a simple quiz application where you can test your knowledge and track your score.
      </p>
      <p>
        Feel free to explore the features, try the quiz, and provide your feedback through the{' '}
        <Link to="/Contact" style={styles.link}>
          contact page
        </Link>.
      </p>
    </div>
  );
}

const styles = {
  link: {
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
};

export default About;
