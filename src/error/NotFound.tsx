import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div>
    <h1>404 Not Found</h1>
    <p>Извините, страница, которую вы ищете, не существует.</p>
    <Link to="/">Вернуться на главную страницу</Link>
  </div>
);

export default NotFoundPage;
