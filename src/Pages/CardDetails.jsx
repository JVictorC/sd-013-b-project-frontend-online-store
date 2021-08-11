import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import * as api from '../services/api';

export default class CardDetails extends Component {
  constructor(props) {
    super(props);

    // this.getItemById = this.getItemById.bind(this);
  }

  // getItemById() {
    
  // }
  
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <p>xablau { console.log(id) }</p>
    );
  }
}
