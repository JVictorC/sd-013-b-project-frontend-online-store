import React from 'react';

export default class EmailBox extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <label htmlFor="email">
        <input
          placeholder="Email"
          type="email"
          id="email"
          onChange={ getEmail }
          required
        />
      </label>
    );
  }
}
