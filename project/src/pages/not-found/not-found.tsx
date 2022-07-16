import React from 'react';
import Header from '../../components/header/header';

const NotFound = () => (
  <div className="page page--gray">
    <Header />

    <main className="page__main">
      <div className="container">
        <h1>404 - not found</h1>
      </div>
    </main>
  </div>
);

export default NotFound;
