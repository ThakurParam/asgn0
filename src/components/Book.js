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
        title="The Great Gatsby"
        author="F. Scott Fitzgerald"
        publishedYear={1925}
      />

      <Book
        title="To Kill a Mockingbird"
        author="Harper Lee"
        publishedYear="1960" // Testing prop validation with a string for a number prop
      />

      <Book
        title="The Catcher in the Rye"
        author={123} // Testing prop validation with a number for a string prop
        publishedYear={1951}
      />
    </div>
  );
}

export default Books;