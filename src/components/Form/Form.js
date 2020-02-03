import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ handleChange, url }) => {
  return (
    <form>
      <aside> 
        <h2>History</h2>
        <ul id="history"></ul>
      </aside>
      <label>
        <input type="text" id="url-text-area" name="url" placeholder="URL" value={url} onChange={handleChange}></input>
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
        <label>
          <button type="submit" onChange={handleChange}>Go!</button>
        </label>
        <textarea placeholder="Raw JSON Body" name="requestBody" onChange={handleChange}></textarea>
      </label>
    </form>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default Form; 
