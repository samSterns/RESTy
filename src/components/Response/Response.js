import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';

const ResponseItem = ({ response }) => (
  <div className={styles}>
    <textarea>{response}</textarea>
  </div>
);

Response.propTypes = {
  response: PropTypes.string.isRequired
};


export default ResponseItem; 
