import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ jsonHeader, jsonResponse }) => (
  <section>
    <p>{jsonHeader}</p>
    <p>{jsonResponse}</p>
  </section>
);

Response.PropTypes = {
  jsonResponse: PropTypes.string.isRequired,
  jsonHeader: PropTypes.string.isRequired
};

export default Response; 
