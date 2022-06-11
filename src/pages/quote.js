import React from 'react';
import './quote.css';

const Quotes = () => {
  const quoteData = {
    cite: 'Mathematics is not about numbers, equations, computations or algorithms: It is about understanding.',
    author: '- William Paul, Thurston',
  };

  const { cite, author } = quoteData;

  return (
    <>
      <main>
        <div>
          <p>{cite}</p>
          <br />
          {author}
        </div>
      </main>
    </>
  );
};

export default Quotes;
