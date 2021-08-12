import React from 'react';
import PropTypes from 'prop-types';

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

EmailBox.propTypes = {
  getEmail: PropTypes.func.isRequired,
};
