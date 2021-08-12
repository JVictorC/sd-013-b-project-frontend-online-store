import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { getRating } = this.props;

    return (
      <label htmlFor="rating">
        <input
          type="number"
          id="rating"
          step={ 0.5 }
          min={ 0 }
          max={ 5 }
          onChange={ getRating }
          required
        />
      </label>
    );
  }
}

Rating.propTypes = {
  getRating: PropTypes.func.isRequired,
};
