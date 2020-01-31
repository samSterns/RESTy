import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ handleChange }) => {
  return (
    <form>
      <label>
        <input type="radio" name="method" value="GET" onChange={handleChange}></input>
        <span>GET</span>
      </label>
      <label>
        <input type="radio" name="method" value="POST" onChange={handleChange}></input>
        <span>POST</span>
      </label>
      <label>
        <input type="radio" name="method" value="PUT" onChange={handleChange}></input>
        <span>PUT</span>
      </label>
      <label>
        <input type="radio" name="method" value="PATCH" onChange={handleChange}></input>
        <span>PATCH</span>
      </label>
      <label>
        <input type="radio" name="method" value="DELETE" onChange={handleChange}></input>
        <span>DELETE</span>
      </label>
    </form>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Form; 
