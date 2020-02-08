import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ handleChange, url, method }) => {
  return (
    <form className={styles.Form}>
    
      
      <label className={styles.active}>
        <input className="url-style" type="text" id="url-text-area" name="url" placeholder="URL" value={url} onChange={handleChange}></input>
        <input className="radio-button" type="radio" name="method" value="GET" checked={method === 'GET'} onChange={handleChange}></input>
        <span>GET</span>
      </label>
      <label>
        <input className="radio-button" type="radio" name="method" value="POST" checked={method === 'POST'} onChange={handleChange}></input>
        <span>POST</span>
      </label>
      <label>
        <input className="radio-button" type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={handleChange}></input>
        <span>PUT</span>
      </label>
      <label>
        <input className="radio-button" type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={handleChange}></input>
        <span>PATCH</span>
      </label>
      <label>
        <input  className="radio-button" type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={handleChange}></input>
        <span>DELETE</span>
        <div>
          <button className="go-button" type="submit" onChange={handleChange}>Go!</button>
        </div>
        <textarea placeholder="Raw JSON Body" name="requestBody" onChange={handleChange}></textarea>
      </label>
    </form>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default Form; 
