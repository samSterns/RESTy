import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';

export default class Resty extends Component {

    state = {
      url: '',
      method: '',
      response: '',
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        
      return (
        <>
          <Form 
            handleChange={this.handleChange} 
            url={this.state.url}/>
        </>
      );
    }
}
