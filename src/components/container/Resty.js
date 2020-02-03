import React, { Component } from 'react';
import { apiCall } from '../services/apiCall.js';
import Form from '../Form/Form';
import Response from '../Response/Response.js';

export default class Resty extends Component {

    state = {
      url: '',
      method: '',
      Response: '',
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit = event => {
      event.preventDefault();
  
      this.setState(prevstate => ({
        history: [...prevstate.history, {
          method: this.state.method,
          url: this.state.url,
          jsoninput: this.state.url
        }] 
      }));
      this.fetch();
    };

    fetch = () => {
      return apiCall(this.state.url, this.state.method, this.state.jsoninput)
        .then(response => this.setState({ response: JSON.stringify(response, null, 2) }));
    }

    render() {
        
      return (
        <>
          <Form 
            handleChange={this.handleChange} 
            onSubmit={this.onSubmit}
            url={this.state.url}/>
          <Response
            response={this.state.Response}
          />
        </>
      );
    }
}
