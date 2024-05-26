import React from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    fontSize: '3em',
    margin: '0.5em 0',
  },
  text: {
    fontSize: '1.5em',
    margin: '0.5em 0',
  },
  link: {
    fontSize: '1.2em',
    color: '#007bff',
    textDecoration: 'none',
    marginTop: '1em',
  }
};

const NotFoundPage: React.FC = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>404 Not Found</h1>
    <p style={styles.text}>Извините, страница, которую вы ищете, не существует.</p>
    <Link to="/" style={styles.link}>Вернуться на главную страницу</Link>
  </div>
);

export default NotFoundPage;
