import React, { Component } from 'react';
import { apiCall } from '../services/apiCall.js';
import Form from '../Form/Form';
import ResponseItem from '../Response/Response.js';

export default class Resty extends Component {

    state = {
      url: '',
      jsoninput: '',
      method: 'GET',
      responseItem: {},
      previousHistory: []
    }

    fetch = () => {
      return apiCall(this.state.url, this.state.method, this.state.jsoninput)
        .then(response => this.setState({ response: JSON.stringify(response, null, 2) }));
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = event => {
      event.preventDefault();
  
      
      this.setState(() => ({ previousHistory: [...previousHistory, {
        method: this.state.method,
        url: this.state.url,
        jsoninput: this.state.url
      }] 
      }));
      this.fetch();
    };


    render() {
      const { previousHistory, url, method, reponseItem } = this.state;

      return (
        <>
          <Form 
            handleChange={this.handleChange} 
            onSubmit={this.onSubmit}
            url={this.state.url}/>
          <ResponseItem
            response={this.state.ResponseItem}
          />
        </>
      );
    }
}
