import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';

const ResponseItem = ({ response }) => (
  <div className={styles}>
    <textarea response={response} />
  </div>
);

ResponseItem.propTypes = {
  response: PropTypes.object.isRequired
};


export default ResponseItem; 
