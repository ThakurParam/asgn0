import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>Author: {props.author}</p>
      <p>Published Year: {props.publishedYear}</p>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedYear: PropTypes.number.isRequired,
};

function Books() {
  return (
    <div>
      <Book
        title="my life story"
        author=" param thakur"
        publishedYear={2032}
      />

      <Book
        title="To Kill me"
        author="me"
        publishedYear={22222} 
      />

      <Book
        title="The Catcher in the Rye"
        author={daddy} 
        publishedYear={753}
      />
    </div>
  );
}

export default Books;