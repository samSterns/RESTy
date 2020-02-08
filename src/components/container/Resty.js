import React, { Component } from 'react';
import { apiCall } from '../services/apiCall.js';
import Form from '../Form/Form';
import ResponseItem from '../Response/Response.js';

export default class Resty extends Component {

    state = {
      url: '',
      jsoninput: '',
      method: '',
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

    handleSubmit = event => {
      event.preventDefault();
      
      fetch(this.state.url, {
        methods: this.state.method,
        headers:  {
          'Content-Type': 'application/json'
        },
        body: this.state.requestBody
      })
        .then(res => {
          return res.json();
        })
        .then(response => {
          this.setState({ responseItem:response });
        }
        )
    };


    render() {
      const { previousHistory, url, method, responseItem } = this.state;

      return (
        <>
          <Form 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            url={url}/>
          <ResponseItem
            response={responseItem}
          />
        </>
      );
    }
}
