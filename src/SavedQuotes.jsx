import React from 'react';
import './SavedQuotes.css';

const SavedQuotes = ({ quotes }) => {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      {quotes.map((quote, index) => (
        <div key={index} className="saved-quote-card">
          <p>{quote}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedQuotes;
