import React from 'react';
import { Link, Outlet } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.box}>
          <h1 style={styles.title}>
            <Link to="/About" style={styles.link}>
              Welcome to The Coolest Hub Ever
            </Link>
          </h1>
          <p style={styles.subtitle}>Navigate through the site using the links below.</p>
        </header>
        <nav style={{ ...styles.box, ...styles.nav }}>
          <Link to="/Quiz" style={styles.navLink}>
            Take the Quiz
          </Link>
          <span style={styles.separator}>|</span>
          <Link to="/Contact" style={styles.navLink}>
            Drop Us a Line
          </Link>
        </nav>
        <main style={styles.main}>
          <Outlet />
        </main>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  box: {
    padding: '20px',
    marginBottom: '20px',
    border: '2px solid #007BFF',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    margin: '10px 0',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  navLink: {
    fontSize: '1.2rem',
    color: '#007BFF',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
  },
  separator: {
    color: '#333',
    fontSize: '1.2rem',
  },
  main: {
    marginTop: '20px',
  },
};

export default Home;
