import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subheading}>Page Not Found</h2>
      <p style={styles.description}>
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <a href="#/" style={styles.link}>Return to Home</a>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '4rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: 0,
    color: '#ff6b6b',
  },
  subheading: {
    fontSize: '2rem',
    margin: '1rem 0',
  },
  description: {
    fontSize: '1.1rem',
    maxWidth: '500px',
    marginBottom: '2rem',
  },
  link: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
};

export default NotFoundPage;
