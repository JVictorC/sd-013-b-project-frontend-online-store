import React, { Component } from 'react';

export default class BarProgress extends Component {
  render() {
    return (
      <div className="progress">
        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
      </div>
    );
  }
}
