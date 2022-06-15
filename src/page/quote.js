import React from 'react';

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
          <p>{author}</p>
        </div>
      </main>
    </>
  );
};

export default Quotes;
